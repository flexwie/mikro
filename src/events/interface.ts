/**
 * Represents a callback to an event
 */
export type eventCallback = (error: Error | null, data: IEventData) => void

/**
 * Represents event data that is submitted with an event
 */
export interface IEventData {
  emitterName: string
  timestamp: number
  data: object
}

/**
 * Represents an health check object
 */
export interface IHealthData {
  instanceName: string
  serviceName: string
}

/**
 * Represents the common interface for all event stream adapters
 */
export default interface IEventStream {
  subscribe: (eventName: string, callback: eventCallback) => void
  publish: (eventName: string, data: IEventData) => void
  unsubscribe: (eventName: string) => void
  health: (instanceData: IHealthData) => void
}
