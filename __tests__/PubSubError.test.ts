import { PubSubError } from '../src/errors'

test('PubSubError is an error type', () => {
    let error = new PubSubError("")
    expect(error instanceof Error).toBeTruthy()
})

test('message is set correctly', () => {
    try {
        throw new PubSubError("Test Message")
    } catch (e) {
        expect(e.message).toBe("Test Message")
    }
})