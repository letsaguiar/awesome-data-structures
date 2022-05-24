import { AbstractLinkedList } from "../app/LinkedList/AbstractLinkedList";

describe('Size functions', () => {
    test('Increment size', () => {
        const new_list = new AbstractLinkedList()
        new_list.incrementSize()

        expect(new_list.size).toBe(1)
    })

    test('Decrement size', () => {
        const new_list = new AbstractLinkedList()
        new_list.incrementSize()
        new_list.decrementSize()

        expect(new_list.size).toBe(0)
    })

    test('Decrement empty list size', () => {
        const new_list = () => new AbstractLinkedList().decrementSize()

        expect(new_list).toThrowError()
    })
})

describe('Unimplemented functions', () => {
    test('addToFront', () => {
        const new_list = () => new AbstractLinkedList().addToFront(1)

        expect(new_list).toThrowError()
    })

    test('addToBack', () => {
        const new_list = () => new AbstractLinkedList().addToBack(1)

        expect(new_list).toThrowError()
    })

    test('removeFromFront', () => {
        const new_list = () => new AbstractLinkedList().removeFromFront()

        expect(new_list).toThrowError()
    })

    test('removeFromBack', () => {
        const new_list = () => new AbstractLinkedList().removeFromBack()

        expect(new_list).toThrowError()
    })
})