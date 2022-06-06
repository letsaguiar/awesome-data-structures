import { Queue } from "../../app/Queue/Queue";

let empty_queue = new Queue
let full_queue = new Queue

beforeEach(() => {
    empty_queue = new Queue
    full_queue = new Queue

    full_queue.enqueue(1)
    full_queue.enqueue(2)
    full_queue.enqueue(3)
})

describe('creates an empty queue', () => {
    test('create an empty queue', () => {
        expect(empty_queue).toBeDefined()
        expect(empty_queue.size).toBe(0)
        expect(empty_queue.begin).toBe(null)
        expect(empty_queue.end).toBe(null)
    })
})

describe('add operations', () => {
    test('enqueue one element', () => {
        empty_queue.enqueue(1)
        expect(empty_queue.size).toBe(1)
        expect(empty_queue.begin).toBe(1)
        expect(empty_queue.end).toBe(1)

        full_queue.enqueue(4)
        expect(full_queue.size).toBe(4)
        expect(full_queue.begin).toBe(1)
        expect(full_queue.end).toBe(4)
    })
})

describe('remove operations', () => {
    test('dequeue an empty list', () => {
        expect(() => {
            empty_queue.dequeue()
        }).toThrowError()
    })

    test('dequeue one element', () => {
        expect(full_queue.dequeue()).toBe(1)
        expect(full_queue.size).toBe(2)
        expect(full_queue.begin).toBe(2)
        expect(full_queue.end).toBe(3)
    })
})

describe('clear operations', () => {
    test('clear a queue', () => {
        full_queue.clear()

        expect(full_queue.begin).toBe(null)
        expect(full_queue.end).toBe(null)
        expect(full_queue.size).toBe(0)
    })

    test('check if a queue is empty', () => {
        expect(full_queue.isEmpty()).toBe(false)
        expect(empty_queue.isEmpty()).toBe(true)
    })
})

describe('getters and setters', () => {
    test('begin', () => {
        expect(empty_queue.begin).toBe(null)
        expect(full_queue.begin).toBe(1)

    })

    test('end', () => {
        expect(empty_queue.end).toBe(null)
        expect(full_queue.end).toBe(3)

    })

    test('size', () => {
        expect(full_queue.size).toBe(3)
        expect(empty_queue.size).toBe(0)
    })
})