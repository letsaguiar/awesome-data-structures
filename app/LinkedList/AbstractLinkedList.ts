import { ListNode } from "./ListNode"

export class AbstractLinkedList {
    public head: ListNode
    public tail: ListNode
    public size: number

    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    incrementSize () {
        this.size += 1
    }

    decrementSize () {
        if (this.size == 0) {
            throw new Error ("Can't decrement empty list size")
        }

        this.size -= 1
    }

    checkIndexRange (index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index Out Of Range')
        }
    }

    checkReturnOptions (node: ListNode, options?: {returnNode? : boolean}) {

        if (node && (!options || !options.returnNode)) {
            return node.data
        } 
        else if (node && options && options.returnNode) {
            return node
        }
        else {
            return null
        }

    }

    addToFront (data: any) : void {
        throw new Error('Method not implemented')
    }

    addToBack (data: any) : void {
        throw new Error('Method not implemented')
    }

    insertAt (data: any, index: number) : void {
        throw new Error('Method not implemented')
    }

    removeFromFront () : any {
        throw new Error('Method not implemented')
    }

    removeFromBack () : any {
        throw new Error('Method not implemented')
    }

    deleteAt (index: number) : any {
        throw new Error('Method not implemented')
    }

    findAndReturnData (data: any, options?: {returnNode? : boolean}) : any {
        let current_node = this.head
        while (current_node != null) {
            if (current_node.data == data) break
            current_node = current_node.next
        }

        return this.checkReturnOptions(current_node, options)
    }

    findAndReturnIndex (data: any) : number {
        let current_node = this.head
        let index = 0
        while (current_node != null) {
            if (current_node.data == data) break
            current_node = current_node.next
            index += 1
        }

        return current_node ? index : -1
    }

    find (data: any, options?: {returnNode?: boolean, returnIndex?: boolean}) {
        
        if (options?.returnIndex) {
            return this.findAndReturnIndex(data)
        }
        else {
            return this.findAndReturnData(data, options)
        }

    }

    findAndRemove (data: any) : any {
        const node_index = this.find(data, {returnIndex: true})

        if (node_index == -1) {
            throw new Error('Element not found!')
        }

        return this.deleteAt(node_index)
    }

    at (index: number, options?: {returnNode?: boolean}) : any {
        this.checkIndexRange(index)

        let current_node = this.head
        for (let i=0; i < index; i++) {
            current_node = current_node.next
        }

        return this.checkReturnOptions(current_node, options)
    }

    toArray () : Array <any> {
        let current_node = this.head
        const array = []

        while (current_node != null) {
            array.push(current_node.data)
            current_node = current_node.next
        }

        return array
    }

    contains (data: any) : boolean {
        const node = this.find(data)
        return node ? true : false
    }

    isEmpty () : boolean {
        return this.head == null && this.tail == null && this.size == 0
    }

    clear () : void {
        this.head = null
        this.tail = null
        this.size = 0
    }
}