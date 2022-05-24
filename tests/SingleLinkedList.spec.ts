import { SingleLinkedList } from "../app/LinkedList/SingleLinkedList";

describe('Add to list', () => {
    test('Create a new cleaned list', () => {
        const new_list = new SingleLinkedList()

        expect(new_list.size).toBe(0)
        expect(new_list.head).toBe(null)
        expect(new_list.tail).toBe(null)
    })

    test ('Adds an element to front of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToFront(1)

        expect(new_list.size).toBe(1)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(1)
    })

    test ('Adds two elements to front of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToFront(1)
        new_list.addToFront(2)

        expect(new_list.size).toBe(2)
        expect(new_list.head.data).toBe(2)
        expect(new_list.tail.data).toBe(1)
    })

    test ('Adds three elements to front of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToFront(1)
        new_list.addToFront(2)
        new_list.addToFront(3)

        expect(new_list.size).toBe(3)
        expect(new_list.head.data).toBe(3)
        expect(new_list.tail.data).toBe(1)
    })

    test ('Adds an element to back of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack(1)

        expect(new_list.size).toBe(1)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(1)
    })

    test ('Adds two elements to back of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack(1)
        new_list.addToBack(2)

        expect(new_list.size).toBe(2)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(2)
    })

    test ('Adds three elements to back of the list', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack(1)
        new_list.addToBack(2)
        new_list.addToBack(3)

        expect(new_list.size).toBe(3)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(3)
    })
})

describe('Remove from list', () => {
    test('Remove from front with zero element', () => {
        const new_list = () => new SingleLinkedList().removeFromFront()

        expect(new_list).toThrowError()
    })

    test('Remove from front with one element', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.removeFromFront()

        expect(new_list.size).toBe(0)
        expect(new_list.head).toBe(null)
        expect(new_list.tail).toBe(null)
    })

    test('Remove from front with two elements', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.addToBack (2)

        new_list.removeFromFront()

        expect(new_list.size).toBe(1)
        expect(new_list.head.data).toBe(2)
        expect(new_list.tail.data).toBe(2)
    })

    test('Remove from front with 3 elements', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.addToBack (2)
        new_list.addToBack (3)

        new_list.removeFromFront()

        expect(new_list.size).toBe(2)
        expect(new_list.head.data).toBe(2)
        expect(new_list.tail.data).toBe(3)
    })

    test('Remove from back with zero element', () => {
        const new_list = () => new SingleLinkedList().removeFromBack()

        expect(new_list).toThrowError()
    })

    test('Remove from front with one element', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.removeFromBack()

        expect(new_list.size).toBe(0)
        expect(new_list.head).toBe(null)
        expect(new_list.tail).toBe(null)
    })

    test('Remove from back with two elements', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.addToBack (2)

        new_list.removeFromBack()

        expect(new_list.size).toBe(1)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(1)
    })

    test('Remove from back with 3 elements', () => {
        const new_list = new SingleLinkedList()
        new_list.addToBack (1)
        new_list.addToBack (2)
        new_list.addToBack (3)

        new_list.removeFromBack()

        expect(new_list.size).toBe(2)
        expect(new_list.head.data).toBe(1)
        expect(new_list.tail.data).toBe(2)
    })
})