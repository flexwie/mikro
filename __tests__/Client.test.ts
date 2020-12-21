import {Mikro, RedisEventStream } from '../src/index'

test("Mikro initiates correctly", () => {
    let mikro = new Mikro("name", {
        eventStream: new RedisEventStream({})
    })
    expect(mikro instanceof Mikro).toBeTruthy()
})