import { Queue } from "../app/Queue/Queue";

describe('Queue Operations', () => {
    test('Create an empty queue', () => {
        const queue = new Queue()
        
        expect(queue.size).toBe(0)
        expect(queue.peek()).toBe(null)
    })

    test('Push one element', () => {
        const queue = new Queue()
        queue.enqueue(1)

        expect(queue.size).toBe(1)
        expect(queue.peek().data).toBe(1)
    })

    test('Push two elements', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.size).toBe(2)
        expect(queue.peek().data).toBe(1)
    })

    test('Pop with 0 elements', () => {
        const queue = () => new Queue().dequeue()

        expect(queue).toThrowError()
    })

    test('Pop with one element', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.dequeue()

        expect(queue.size).toBe(0)
        expect(queue.peek()).toBe(null)
    })

    test('Pop with two element', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.dequeue()

        expect(queue.size).toBe(1)
        expect(queue.peek().data).toBe(2)
    })

    test('Peek with two element', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.size).toBe(2)
        expect(queue.peek().data).toBe(1)
    })
})