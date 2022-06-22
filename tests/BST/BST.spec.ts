import { BST } from "../../app/BST/BST";

describe('BST', () => {
    let empty_bst = new BST()
    let full_bst = new BST()

    beforeEach(() => {
        empty_bst = new BST()
        full_bst = new BST()

        full_bst.insert(10)
        full_bst.insert(5)
        full_bst.insert(1)
        full_bst.insert(15)
        full_bst.insert(25)
    })

    describe('creates an empty bst', () => {
        test('creates an empty bst', () => {
            expect(empty_bst).toBeDefined()
            expect(empty_bst.size()).toBe(0)
            expect(empty_bst.root()).toBe(undefined)
        })
    })

    describe('clear functions', () => {
        test('isEmpty', () => {
            expect(full_bst.isEmpty()).toBe(false)
            expect(empty_bst.isEmpty()).toBe(true)
        })

        test('clear', () => {
            full_bst.clear()

            expect(full_bst.root()).toBe(undefined)
            expect(full_bst.size()).toBe(0)
        })
    })
    
    describe('find operations', () => {
        test('should throw error when data is null', () => {
            expect(() => {
                full_bst.find(null)
            }).toThrowError()
        })
    
        test('find and return data', () => {
            expect(full_bst.find(5)).toBe(5)
            expect(full_bst.find(10)).toBe(10)
            expect(full_bst.find(15)).toBe(15)
        })
    
        test('find and return node', () => {
            const node = full_bst.find(10, {returnNode: true})
            expect(node.data).toBe(10)
        })
    
        test('not found', () => {
            expect(full_bst.find(20)).toBe(undefined)
        })
    
        test('contains', () => {
            expect(full_bst.contains(10)).toBe(true);
            expect(full_bst.contains(20)).toBe(false)
        })
    })

    describe('insert operations', () => {
        test('insert at root', () => {
            empty_bst.insert(10)

            expect(empty_bst.root()).toBe(10)
            expect(empty_bst.size()).toBe(1)
        })

        test('insert at left', () => {
            empty_bst.insert(10)
            empty_bst.insert(5)

            const root = empty_bst.root({ returnNode: true })
            expect(root.left.data).toBe(5)
            expect(empty_bst.size()).toBe(2)
        })

        test('insert at right', () => {
            empty_bst.insert(10)
            empty_bst.insert(15)

            const root = empty_bst.root({ returnNode: true })
            expect(root.right.data).toBe(15)
            expect(empty_bst.size()).toBe(2)
        })
    })

    describe('remove operations', () => {
        test('should return -1 when do not find element', () => {
            expect(empty_bst.remove(1)).toBe(-1)
            expect(empty_bst.size()).toBe(0)

            expect(full_bst.remove(20)).toBe(-1)
            expect(full_bst.size()).toBe(5)
        })

        test('remove an element with 0 children', () => {
            const removedNode = full_bst.remove(25)
            const root = full_bst.root({returnNode: true})

            expect(removedNode).toBe(25)
            expect(full_bst.size()).toBe(4)
            expect(root.right.right).toBe(null)
        })

        test('remove an element with 1 children', () => {
            const removedNode = full_bst.remove(5)
            const root = full_bst.root({returnNode: true})

            expect(removedNode).toBe(5)
            expect(full_bst.size()).toBe(4)
            expect(root.left.data).toBe(1)
        })

        test('remove an element with 2 children', () => {
            const removedNode = full_bst.remove(10)
            const root = full_bst.root({returnNode: true})

            expect(removedNode).toBe(10)
            expect(full_bst.size()).toBe(4)
            expect(root.data).toBe(15)
        })
    })
})