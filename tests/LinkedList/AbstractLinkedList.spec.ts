import { AbstractLinkedList } from "../../app/LinkedList/AbstractLinkedList";
import { ListNode } from '../../app/LinkedList/ListNode'

let empty_list = new AbstractLinkedList()
let full_list = new AbstractLinkedList()

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

beforeEach(() => {
    empty_list = new AbstractLinkedList()

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

describe('return options', () => {
    test('return node', () => {
        expect(full_list.returnOptions(node3, {returnNode: true})).toBe(node3)
    })

    test('return index', () => {
        expect(full_list.returnOptions(node3, {returnIndex: true})).toBe(2)
    })

    test('return data', () => {
        expect(full_list.returnOptions(node3)).toBe(3)
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
    test('find and return data', () => {
        expect(full_list.find(1)).toBe(1)
    })

    test('find and return node', () => {
        expect(full_list.find(1, {returnNode: true})).toBe(node1)
    })

    test('find and return index', () => {
        expect(full_list.find(1, {returnIndex: true})).toBe(0)
    })

    test('not found', () => {
        expect(full_list.find(4)).toBe(undefined)
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

describe('implemented functions', () => {
    test('to array', () => {
        expect(full_list.toArray()).toStrictEqual([1, 2, 3])
    })

    test('contains', () => {
        expect(full_list.contains(2)).toBe(true)
        expect(full_list.contains(4)).toBe(false)
    })

    test('is empty', () => {
        expect(empty_list.isEmpty()).toBe(true)
        expect(full_list.isEmpty()).toBe(false)
    })

    test('clear', () => {
        full_list.clear()

        expect(full_list.isEmpty()).toBe(true)
    })
})