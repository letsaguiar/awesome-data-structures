import { Stack } from "../app/Stack/Stack";

describe('Stack Operations', () => {
    test('Create an empty stack', () => {
        const stack = new Stack()
        
        expect(stack.size).toBe(0)
        expect(stack.peek()).toBe(null)
    })

    test('Push one element', () => {
        const stack = new Stack()
        stack.push(1)

        expect(stack.size).toBe(1)
        expect(stack.peek().data).toBe(1)
    })

    test('Push two elements', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)

        expect(stack.size).toBe(2)
        expect(stack.peek().data).toBe(2)
    })

    test('Pop with 0 elements', () => {
        const stack = () => new Stack().pop()

        expect(stack).toThrowError()
    })

    test('Pop with one element', () => {
        const stack = new Stack()
        stack.push(1)
        stack.pop()

        expect(stack.size).toBe(0)
        expect(stack.peek()).toBe(null)
    })

    test('Pop with two element', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.pop()

        expect(stack.size).toBe(1)
        expect(stack.peek().data).toBe(1)
    })

    test('Peek with two element', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)

        expect(stack.size).toBe(2)
        expect(stack.peek().data).toBe(2)
    })

    test('Is empty is true', () => {
        const stack = new Stack()

        expect(stack.isEmpty()).toBe(true)
    })

    test('Is empty is false', () => {
        const stack = new Stack()
        stack.push(1)

        expect(stack.isEmpty()).toBe(false)
    })

    test('Clear stack', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.clear()

        expect(stack.peek()).toBe(null)
        expect(stack.isEmpty()).toBe(true)
    })
})