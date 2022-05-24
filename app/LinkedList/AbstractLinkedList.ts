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

    addToFront (data: any) : ListNode {
        throw new Error('Method not implemented')
    }

    addToBack (data: any) : ListNode {
        throw new Error('Method not implemented')
    }

    removeFromFront () : ListNode {
        throw new Error('Method not implemented')
    }

    removeFromBack () : ListNode {
        throw new Error('Method not implemented')
    }
}