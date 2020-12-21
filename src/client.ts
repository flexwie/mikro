import * as RedisClient from 'ioredis'
import { Redis, RedisOptions } from 'ioredis'
import { uniqueNamesGenerator as uniq, adjectives, colors, animals } from 'unique-names-generator'
import * as logger from 'winston'

import IEventStream from './events/interface'

/**
 * Options for mikro clients
 * @typedef {object} IMikroOptions
 * @property {IEventStream} eventStream PubSub event stream client
 */
export interface IMikroOptions {
  eventStream: IEventStream
}

export default class Mikro {
  instanceName!: string
  logging!: logger.Logger
  events: IEventStream
  redis: Redis

  private healthTimer: NodeJS.Timeout | undefined
  private serviceName: string

  private configHolder: Record<string, string> = {}
  /**
   * Creates a new mikro base instance
   * @constructor
   * @param {string} name The service name. Will be the same for each replica of this service
   * @param {IMikroOptions} opts Configuration to be passed down
   */
  constructor(name: string, opts: IMikroOptions) {
    this.serviceName = name

    this.events = opts.eventStream

    // generate a random name for our service
    this.instanceName = uniq({
      dictionaries: [adjectives, colors, animals],
      length: 3,
      separator: '-',
    })

    // use winston as a logging instance
    this.logging = logger.createLogger({
      level: 'info',
      transports: [
        new logger.transports.Console({
          format: logger.format.combine(
            logger.format.colorize(),
            logger.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
            logger.format.printf(
              (info) =>
                `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : ' '),
            ),
          ),
        }),
      ],
    })

    // we use redis independently from our event stream for instance configuration
    // load the configuration once on creation and then listen for events matching our key
    this.redis = new RedisClient()
    this.redis.hgetall(`conf:${this.serviceName}`, (err, res) => {
      this.configHolder = {...this.configHolder, ...res}
      this.logging.info("Configuration loaded successfully")
    })

    const listener = new RedisClient()
    listener.psubscribe(`__keyspace@0__:conf:${this.serviceName}`)
    listener.on("pmessage", (p, c, m) => {
      if(m === "hset") {
        this.redis.hgetall(`conf:${this.serviceName}`, (err, res) => {
          if(err) this.logging.error(err.message)
          this.logging.info("Reloading configuration...")
          this.configHolder = {...this.configHolder, ...res}
        })
      }
    })
  }

  /**
   * Registers the service to the registry
   * @function
   */
  register() {
    this.logging.log('info', `Service created with name ${this.instanceName}`)
    this.healthTimer = (setInterval(() => {
      this.events.health({
        instanceName: this.instanceName,
        serviceName: this.serviceName,
      })
    }, 1000) as unknown) as NodeJS.Timeout
  }

  /**
   * Gracefully deregisters the service. Clears health timer and notifies registry + peers.
   * @function
   */
  deregister() {
    if (this.healthTimer) {
      clearInterval(this.healthTimer)
    } else {
      throw new Error("You can't deregister a service you haven't registered yet.")
    }
  }

  /**
   * Interfaces the configuration object but provides a fallback
   * @function
   * @param {string} key 
   * @param {string} fallback value to use if key is not set in configuration
   * @returns {string}
   */
  config(key: string, fallback: any): string {
    if(key in this.configHolder) {
      return this.configHolder[key]
    }

    return fallback
  }
}
