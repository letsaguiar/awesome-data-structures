import { Stack } from "../../app/Stack/Stack";

let empty_stack = new Stack()
let full_stack = new Stack()

beforeEach(() => {
    empty_stack = new Stack()
    full_stack = new Stack()

    full_stack.push(1)
    full_stack.push(2)
    full_stack.push(3)
})

describe('creates an empty stack', () => {
    test('creates an empty stack', () => {
        expect(empty_stack).toBeDefined()
        expect(empty_stack.size()).toBe(0)
        expect(empty_stack.begin()).toBe(undefined)
    })
})

describe('add operations', () => {
    test('push one element', () => {
        empty_stack.push(1)
        expect(empty_stack.size()).toBe(1)
        expect(empty_stack.begin()).toBe(1)

        full_stack.push(4)
        expect(full_stack.size()).toBe(4)
        expect(full_stack.begin()).toBe(4)
    })
})

describe('remove operations', () => {
    test('pop an empty stack', () => {
        expect(() => {
            empty_stack.pop()
        }).toThrowError()
    })

    test('pop one element', () => {
        full_stack.pop()

        expect(full_stack.size()).toBe(2)
        expect(full_stack.begin()).toBe(2)
    })
})

describe('clear operations', () => {
    test('clear a stack', () => {
        full_stack.clear()

        expect(full_stack.begin()).toBe(undefined)
        expect(full_stack.size()).toBe(0)
    })

    test('check if a stack is empty', () => {
        expect(full_stack.isEmpty()).toBe(false)
        expect(empty_stack.isEmpty()).toBe(true)
    })
})

describe('getters and setters', () => {
    test('begin()', () => {
        expect(full_stack.begin()).toBe(3)
        expect(empty_stack.begin()).toBe(undefined)
    })

    test('end()', () => {
        expect(full_stack.end()).toBe(1)
        expect(empty_stack.begin()).toBe(undefined)
    })

    test('size()', () => {
        expect(full_stack.size()).toBe(3)
        expect(empty_stack.size()).toBe(0)
    })
})