import { AbstractLinkedList } from "../../app/LinkedList/AbstractLinkedList";
import { ListNode } from '../../app/LinkedList/ListNode'

let empty_list = new AbstractLinkedList()
let full_list = new AbstractLinkedList()

beforeEach(() => {
    empty_list = new AbstractLinkedList()

    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)

    node1.next = node2
    node2.next = node3

    full_list.head = node1
    full_list.tail = node2
    full_list.size = 3
})

describe('size functions', () => {
    test('increment size', () => {
        full_list.incrementSize()

        expect(full_list.size).toBe(4)
    })

    test('decrement size', () => {
        full_list.decrementSize()

        expect(full_list.size).toBe(2)
    })

    test('decrement size of an empty list', () => {
        expect(() =>  {
            empty_list.decrementSize()
        }).toThrowError()
    })
})

describe('check index range', () => {
    test('index is smaller than 0', () => {
        expect(() => {
            full_list.checkIndexRange(-1)
        }).toThrowError()
    })

    test('index is equal or grater than size', () => {
        expect(() => {
            full_list.checkIndexRange(3)
        }).toThrowError()

        expect(() => {
            full_list.checkIndexRange(4)
        }).toThrowError()
    })

    test('index is grater than zero and smaller than size', () => {
        expect(() => {
            full_list.checkIndexRange(1)
        }).not.toThrowError()
    })
})

describe('check return options', () => {
    test('return node option is empty or false', () => {
        const node4 = new ListNode(4)
        
        expect(full_list.checkReturnOptions(node4)).toBe(4)

        expect(
            full_list.checkReturnOptions(node4, {returnNode: false})
        ).toBe(4)
    })

    test('return node option is true', () => {
        const node4 = new ListNode(4)
        
        expect(
            full_list.checkReturnOptions(node4, {returnNode: true})
        ).toStrictEqual(node4)
    })

    test ('node is null or undefined', () => {
        expect(
            full_list.checkReturnOptions(null)
        ).toBe(null)

        expect(
            full_list.checkReturnOptions(undefined)
        ).toBe(null)
    })
})

describe('not implemented functions', () => {
    test('add to front', () => {
        expect(() => {
            empty_list.addToFront(1)
        }).toThrowError()
    })

    test('add to back', () => {
        expect(() => {
            empty_list.addToBack(1)
        }).toThrowError()
    })

    test('insert at', () => {
        expect(() => {
            empty_list.insertAt(1, 0)
        }).toThrowError()
    })

    test('remove from front', () => {
        expect(() => {
            empty_list.removeFromFront()
        }).toThrowError()
    })

    test('remove from back', () => {
        expect(() => {
            empty_list.removeFromBack()
        }).toThrowError()
    })

    test('delete at', () => {
        expect(() => {
            empty_list.deleteAt(0)
        }).toThrowError()
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
        expect(() => {
            full_list.findAndRemove(2)
        }).toThrow('Method not implemented')

        expect(() => {
            full_list.findAndRemove(10)
        }).toThrow('Element not found')
    })
})