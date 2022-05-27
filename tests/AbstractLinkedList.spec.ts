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

    test('Turn list into array', () => {
        const new_list = new AbstractLinkedList()
        
        const node1 = new ListNode(1)
        const node2 = new ListNode(2)
        node1.next = node2

        new_list.head = node1
        new_list.tail = node2
        new_list.size = 2

        expect(new_list.toArray()).toStrictEqual([1, 2])
    })

    test('Check if the list contains an element', () => {
        const new_list = new AbstractLinkedList()
        
        const node1 = new ListNode(1)
        const node2 = new ListNode(2)
        node1.next = node2

        new_list.head = node1
        new_list.tail = node2
        new_list.size = 2

        expect(new_list.contains(1)).toBe(true)
        expect(new_list.contains(2)).toBe(true)
        expect(new_list.contains(3)).toBe(false)
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

    test('insertAt', () => {
        const new_list = () => new AbstractLinkedList().insertAt(1, 1)

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

    test('deletAt', () => {
        const new_list = () => new AbstractLinkedList().deleteAt(1)

        expect(new_list).toThrowError()
    })

    test('findAndRemove', () => {
        const new_list = () => new AbstractLinkedList().findAndRemove(1)

        expect(new_list).toThrowError()
    })
})