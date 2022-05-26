import { Deque } from "../app/Deque/Deque"

describe('Deque Operations', () => {
    test('Create an empty deque', () => {
        const deque = new Deque()

        expect(deque.isEmpty()).toBe(true)
        expect(deque.begin()).toBe(null)
        expect(deque.end()).toBe(null)
    })

    test('Push front 3 elements', () => {
        const deque = new Deque()

        deque.push_front(1)
        deque.push_front(2)
        deque.push_front(3)

        expect(deque.size).toBe(3)
        expect(deque.begin().data).toBe(3)
        expect(deque.end().data).toBe(1)
    })

    test('Push back 3 elements', () => {
        const deque = new Deque()

        deque.push_back(1)
        deque.push_back(2)
        deque.push_back(3)

        expect(deque.size).toBe(3)
        expect(deque.begin().data).toBe(1)
        expect(deque.end().data).toBe(3)
    })

    test('Pop front 3 elements', () => {
        const deque = new Deque()

        deque.push_back(1)
        deque.push_back(2)
        deque.push_back(3)
        deque.pop_front()

        expect(deque.size).toBe(2)
        expect(deque.begin().data).toBe(2)
        expect(deque.end().data).toBe(3)
    })

    test('Pop back 3 elements', () => {
        const deque = new Deque()

        deque.push_back(1)
        deque.push_back(2)
        deque.push_back(3)
        deque.pop_back()

        expect(deque.size).toBe(2)
        expect(deque.begin().data).toBe(1)
        expect(deque.end().data).toBe(2)
    })

    test('Begin and End with 3 elements', () => {
        const deque = new Deque()

        deque.push_back(1)
        deque.push_back(2)
        deque.push_back(3)

        expect(deque.begin()).toBe(deque.head)
        expect(deque.end()).toBe(deque.tail)
    })
})