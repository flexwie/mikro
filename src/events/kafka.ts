import { Kafka, Producer, Consumer, KafkaConfig } from 'kafkajs'
import { PubSubError } from '../errors'

import IEventStream, { eventCallback, IEventData, IHealthData } from './interface'

export default class KafkaEventStream implements IEventStream {
  private kafka: Kafka
  private SubscriberClient!: Consumer
  private PublisherClient!: Producer
  listener: Map<string, eventCallback> = new Map<string, eventCallback>()

  /**
   * Represents an interface to communicate with a Kafka event stream
   * @class
   * @param options Redis configuration
   */
  constructor(options: KafkaConfig) {
    this.kafka = new Kafka(options)

    this.SubscriberClient = this.kafka.consumer()
    this.PublisherClient = this.kafka.producer()

    this.SubscriberClient.connect()
    this.PublisherClient.connect()

    this.SubscriberClient.run({
      eachMessage: ({ topic, message }): Promise<void> => {
        return new Promise((resolve, reject) => {
          try {
            const cb = this.listener.get(topic)

            if (cb) {
              cb(null, JSON.parse(message.value?.toString() as string))
            } else {
              throw new Error(`Couldn't find callback for this event: ${topic}`)
            }

            resolve()
          } catch (error) {
            reject(error)
          }
        })
      },
    })
  }

  /**
   * Emits new data to the event stream
   * @function
   * @param eventName Name of the event
   * @param data Data to be published
   */
  publish = (eventName: string, data: IEventData): void => {
    if (eventName.charAt(0) === '+') {
      throw new PubSubError('Events starting with + are reserved for system communication')
    }
    this.PublisherClient.send({
      topic: eventName,
      messages: [{ value: JSON.stringify(data) }],
    })
  }

  /**
   * Subscribes to a new kafka event and adds a listener
   * @function
   * @param eventName Event to subscribe to
   * @param callback Function to execute
   */
  subscribe = (eventName: string, callback: eventCallback): void => {
    if (eventName.charAt(0) === '+') {
      throw new PubSubError('Events starting with + are reserved for system communication and should not be accessed.')
    }
    this.SubscriberClient.subscribe({
      topic: eventName,
    })

    this.listener.set(eventName, callback)
  }

  /**
   * Unsubscribes the client from an event
   * @function
   * @param eventName Event to be unsubscribed
   */
  unsubscribe = (eventName: string): void => {
    // eslint-disable-next-line no-console
    console.log('KafkaJS has no unsubscribe function so far')
    this.listener.delete(eventName)
  }

  /**
   * Publishes health data
   * @function
   * @param instanceData Health telemetry
   */
  health = (instanceData: IHealthData): void => {
    this.PublisherClient.send({ topic: '+health', messages: [{ value: JSON.stringify(instanceData) }] })
  }
}
