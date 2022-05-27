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

    findAndRemove (data: any) : any {
        throw new Error('Method not implemented')
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
        let current_node = this.head

        while (current_node != null) {
            if (current_node.data == data) break
            current_node = current_node.next
        }

        return current_node ? true : false
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