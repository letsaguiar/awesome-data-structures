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

describe('queue Operations', () => {
    test('create an empty queue', () => {
        expect(empty_queue).toBeDefined()
        expect(empty_queue.size).toBe(0)
        expect(empty_queue.head).toBe(null)
        expect(empty_queue.tail).toBe(null)
    })

    test('enqueue one element', () => {
        empty_queue.enqueue(1)
        expect(empty_queue.size).toBe(1)
        expect(empty_queue.head.data).toBe(1)
        expect(empty_queue.tail.data).toBe(1)

        full_queue.enqueue(4)
        expect(full_queue.size).toBe(4)
        expect(full_queue.head.data).toBe(1)
        expect(full_queue.tail.data).toBe(4)
    })

    test('dequeue an empty list', () => {
        expect(() => {
            empty_queue.dequeue()
        }).toThrowError()
    })

    test('dequeue one element', () => {
        expect(full_queue.dequeue()).toBe(1)
        expect(full_queue.size).toBe(2)
        expect(full_queue.head.data).toBe(2)
        expect(full_queue.tail.data).toBe(3)
    })

    test('peek the first element', () => {
        expect(empty_queue.peek()).toBe(undefined)
        expect(full_queue.peek()).toBe(1)

    })
})