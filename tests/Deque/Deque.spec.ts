import { Deque } from "../../app/Deque/Deque";

let empty_deque = new Deque()
let full_deque = new Deque()

beforeEach(() => {
    empty_deque = new Deque()
    full_deque = new Deque

    full_deque.push_back(1)
    full_deque.push_back(2)
    full_deque.push_back(3)
})

describe('creates an empty deque', () => {
    test('creates an empty deque', () => {
        expect(empty_deque).toBeDefined()
        expect(empty_deque.size()).toBe(0)
        expect(empty_deque.begin()).toBe(undefined)
        expect(empty_deque.end()).toBe(undefined)
    })
})

describe('add operations', () => {
    test('push front one element', () => {
        empty_deque.push_front(1)
        expect(empty_deque.size()).toBe(1)
        expect(empty_deque.begin()).toBe(1)
        expect(empty_deque.end()).toBe(1)

        full_deque.push_front(4)
        expect(full_deque.size()).toBe(4)
        expect(full_deque.begin()).toBe(4)
        expect(full_deque.end()).toBe(3)
    })

    test('push back one element', () => {
        empty_deque.push_back(1)
        expect(empty_deque.size()).toBe(1)
        expect(empty_deque.begin()).toBe(1)
        expect(empty_deque.end()).toBe(1)

        full_deque.push_back(4)
        expect(full_deque.size()).toBe(4)
        expect(full_deque.begin()).toBe(1)
        expect(full_deque.end()).toBe(4)
    })
})

describe('remove operations', () => {
    test('pop an empty list', () => {
        expect(() => {
            empty_deque.pop_front()
        }).toThrowError()

        expect(() => {
            empty_deque.pop_back()
        }).toThrowError()
    })

    test('pop front one element', () => {
        expect(full_deque.pop_front()).toBe(1)
        expect(full_deque.size()).toBe(2)
        expect(full_deque.begin()).toBe(2)
        expect(full_deque.end()).toBe(3)
    })

    test('pop back one element', () => {
        expect(full_deque.pop_back()).toBe(3)
        expect(full_deque.size()).toBe(2)
        expect(full_deque.begin()).toBe(1)
        expect(full_deque.end()).toBe(2)
    })
})

describe('clear functions', () => {
    test('clear a deque', () => {
        full_deque.clear()

        expect(full_deque.size()).toBe(0)
        expect(full_deque.begin()).toBe(undefined)
        expect(full_deque.end()).toBe(undefined)
    })

    test('check if a deque is empty', () => {
        expect(full_deque.isEmpty()).toBe(false)
        expect(empty_deque.isEmpty()).toBe(true)
    })
})

describe('getters and setters', () => {
    test('begin()', () => {
        expect(full_deque.begin()).toBe(1)
        expect(empty_deque.begin()).toBe(undefined)
    })

    test('end()', () => {
        expect(full_deque.end()).toBe(3)
        expect(empty_deque.end()).toBe(undefined)
    })

    test('size()', () => {
        expect(full_deque.size()).toBe(3)
        expect(empty_deque.size()).toBe(0)
    })
})