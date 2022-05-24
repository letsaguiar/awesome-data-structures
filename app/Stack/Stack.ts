import { ListNode } from '../LinkedList/ListNode'

export class Stack {
    public head: ListNode
    public size: number

    constructor () {
        this.head = null
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

    push (data: any) {
        const new_node = new ListNode(data)

        new_node.next = this.head
        this.head = new_node

        this.incrementSize()
    }

    pop () {
        const removed_node = this.head
        this.head = this.head.next

        this.decrementSize()

        return removed_node
    }

    peek () {
        return this.head
    }

    isEmpty () {
        return this.head == null && this.size == 0
    }

    clear () {
        this.head = null
        this.size = 0
    }
}