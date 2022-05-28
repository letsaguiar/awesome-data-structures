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

describe('stack operations', () => {
    test('create an empty stack', () => {
        expect(empty_stack).toBeDefined()
        expect(empty_stack.size).toBe(0)
        expect(empty_stack.head).toBe(null)
    })

    test('push one element', () => {
        empty_stack.push(1)
        expect(empty_stack.size).toBe(1)
        expect(empty_stack.head.data).toBe(1)

        full_stack.push(4)
        expect(full_stack.size).toBe(4)
        expect(full_stack.head.data).toBe(4)
    })

    test('Pop an empty stack', () => {
        expect(() => {
            empty_stack.pop()
        }).toThrowError()
    })

    test('pop one element', () => {
        full_stack.pop()

        expect(full_stack.size).toBe(2)
        expect(full_stack.head.data).toBe(2)
    })

    test('peek the first element', () => {
        expect(full_stack.peek()).toBe(3)
        expect(empty_stack.peek()).toBe(undefined)
    })
})