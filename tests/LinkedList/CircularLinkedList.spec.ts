import { CircularLinkedList } from "../../app/LinkedList/CircularLinkedList";

let empty_list = new CircularLinkedList()
let full_list = new CircularLinkedList()

beforeEach(() => {
    empty_list = new CircularLinkedList()
    full_list = new CircularLinkedList()

    full_list.addToBack(1)
    full_list.addToBack(2)
    full_list.addToBack(3)
})

describe('add functions', () => {
    test('add to front of an empty list', () => {
        empty_list.addToFront(1)

        expect(empty_list.size).toBe(1)
        expect(empty_list.tail.next.data).toBe(1)
    })

    test('add to front with one element', () => {
        empty_list.addToFront(1)
        empty_list.addToFront(2)

        expect(empty_list.size).toBe(2)
        expect(empty_list.tail.next.data).toBe(2)
        expect(empty_list.tail.data).toBe(1)
    })

    test('add to front', () => {
        full_list.addToFront(4)

        expect(full_list.size).toBe(4)
        expect(full_list.tail.next.data).toBe(4)
        expect(full_list.tail.data).toBe(3)
    })

    test('add to back', () => {
        full_list.addToBack(4)

        expect(full_list.size).toBe(4)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(4)
    })

    test('insert at out of range', () => {
        expect(() => {
            full_list.insertAt(4, 3)
        }).toThrowError()
    })

    test('insert at 0', () => {
        full_list.insertAt(4, 0)

        expect(full_list.size).toBe(4)
        expect(full_list.tail.next.data).toBe(4)
        expect(full_list.tail.data).toBe(3)
    })

    test('insert at range', () => {
        full_list.insertAt(4, 1)

        expect(full_list.size).toBe(4)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(3)
    })
})

describe('remove functions', () => {
    test('remove from an empty list', () => {
        expect(() => {
            empty_list.removeFromFront()
        }).toThrowError()

        expect(() => {
            empty_list.removeFromBack()
        }).toThrowError()
    })

    test('remove from front', () => {
        full_list.removeFromFront()

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(2)
        expect(full_list.tail.data).toBe(3)
    })

    test('remove from front with one element', () => {
        empty_list.addToBack(1)
        empty_list.removeFromFront()

        expect(empty_list.size).toBe(0)
        expect(empty_list.tail).toBe(null)
    })

    test('remove from back', () => {
        full_list.removeFromBack()

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(2)
    })

    test('remove from back with one element', () => {
        empty_list.addToBack(1)
        empty_list.removeFromBack()

        expect(empty_list.size).toBe(0)
        expect(empty_list.head?.data).toBe(undefined)
        expect(empty_list.tail?.data).toBe(undefined)
    })

    test('delet at out of range', () => {
        expect(() => {
            full_list.deleteAt(3)
        }).toThrowError()
    })

    test('delete at 0', () => {
        full_list.deleteAt(0)

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(2)
        expect(full_list.tail.data).toBe(3)
    })

    test('delete at size - 1', () => {
        full_list.deleteAt(2)

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(2)
    })

    test('delete at range', () => {
        full_list.deleteAt(1)

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(3)
    })
})

describe('find functions', () => {
    test('find options are empty or false', () => {
        expect(full_list.find(1)).toBe(1)
    })

    test('find index is true', () => {
        expect(full_list.find(1, {returnIndex: true})).toBe(0)
    })

    test('not found', () => {
        expect(full_list.find(4)).toBe(null)
    })

    test('at range', () => {
        expect(full_list.at(1)).toBe(2)
    })

    test('at out of range', () => {
        expect(() => {
            full_list.at(-1)
        }).toThrowError()

        expect(() => {
            full_list.at(3)
        }).toThrowError()
    })

    test('find and remove', () => {
        full_list.findAndRemove(2)

        expect(full_list.size).toBe(2)
        expect(full_list.tail.next.data).toBe(1)
        expect(full_list.tail.data).toBe(3)
    })
})

describe('other functions', () => {
    test('to array', () => {    
        expect(full_list.toArray()).toStrictEqual([1, 2, 3])
    })
})