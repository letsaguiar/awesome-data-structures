import { AbstractLinkedList } from "../app/LinkedList/AbstractLinkedList";
import { ListNode } from '../app/LinkedList/ListNode'

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

describe('Implemented functions', () => {
    test('Is empty is true', () => {
        const new_list = new AbstractLinkedList()

        expect(new_list.isEmpty()).toBe(true)
    })

    test('Is empty is false', () => {
        const new_list = new AbstractLinkedList()
        
        const new_node = new ListNode(1)
        new_list.head = new_node
        new_list.tail = new_node
        new_list.size = 1

        expect(new_list.isEmpty()).toBe(false)
    })

    test('Clear list', () => {
        const new_list = new AbstractLinkedList()
        
        const new_node = new ListNode(1)
        new_list.head = new_node
        new_list.tail = new_node
        new_list.size = 1

        new_list.clear()

        expect(new_list.isEmpty()).toBe(true)
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