import * as RedisClient from 'ioredis'
import { Redis, RedisOptions } from 'ioredis'
import { PubSubError } from '../errors'

import IEventStream, {eventCallback, IEventData, IHealthData} from './interface'

export default class RedisEventStream implements IEventStream {
    private SubscriberClient!: Redis
    private PublisherClient!: Redis
    listener: Map<string, eventCallback> = new Map<string, eventCallback>()

    /**
     * Represents an interface to communicate with a Redis event stream 
     * @class
     * @param options Redis configuration
     */
    constructor(options: RedisOptions) {
        this.SubscriberClient = new RedisClient(options)
        this.PublisherClient = new RedisClient(options)

        this.SubscriberClient.on("message", (channel, message) => {
            let callback = this.listener.get(channel)
            if (callback) { callback(null, JSON.parse(message)) } else { throw new Error(`Couldn't find callback for this event: ${channel}`) }
        })
    }

    /**
     * Emits new data to the event stream
     * @function
     * @param eventName Name of the event
     * @param data Data to be published
     */
    publish = (eventName: string, data: IEventData): void => {
        if(eventName.charAt(0) == "+") {
            throw new PubSubError('Events starting with + are reserved for system communication')
        }
        this.PublisherClient.publish(eventName, JSON.stringify(data))
    }

    /**
     * Subscribes to a new redis event and adds a listener
     * @function
     * @param eventName Event to subscribe to
     * @param callback Function to execute
     */
    subscribe = (eventName: string, callback: eventCallback): void => {
        if(eventName.charAt(0) == '+') {
            throw new PubSubError('Events starting with + are reserved for system communication and should not be accessed.')
        }
        this.SubscriberClient.subscribe(eventName)
        this.listener.set(eventName, callback)
    }

    /**
     * Unsubscribes the client from an event
     * @function
     * @param eventName Event to be unsubscribed
     */
    unsubscribe = (eventName: string): void => {
        this.SubscriberClient.unsubscribe(eventName)
        this.listener.delete(eventName)
    }

    /**
     * Publishes health data
     * @function
     * @param instanceData Health telemetry
     */
    health = (instanceData: IHealthData): void => {
        this.PublisherClient.publish("+health", JSON.stringify(instanceData))
    }
}