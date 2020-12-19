import { RedisOptions } from 'ioredis'
import { uniqueNamesGenerator as uniq, adjectives, colors, animals } from 'unique-names-generator'
import * as logger from 'winston'

import { RedisEventStream } from './events'
import IEventStream from './events/interface'

export interface IMikroOptions {
    eventStream: IEventStream
}

export default class Mikro {
  instanceName!: string
  logging!: logger.Logger
  events: IEventStream

  private healthTimer: NodeJS.Timeout | undefined
  private serviceName: string

  /**
   * Creates a new mikro base instance
   * @class
   * @param name The service name. Will be the same for each replica of this service
   * @param opts IMikroOptions Configuration to be passed down
   */
  constructor(name: string, opts: IMikroOptions) {
    this.serviceName = name

    this.events = opts.eventStream

    this.instanceName = uniq({
      dictionaries: [adjectives, colors, animals],
      length: 3,
      separator: '-',
    })

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
  }

  /**
   * Registers the service to the registry
   * @function
   */
  register() {
    this.logging.log('info', `Service created with name ${this.instanceName}`)
    this.healthTimer = setInterval(() => {
      this.events.health({
        instanceName: this.instanceName,
        serviceName: this.serviceName,
      })
    }, 1000) as unknown as NodeJS.Timeout
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
}
