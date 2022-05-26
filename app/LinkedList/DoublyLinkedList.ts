import { ListNode } from "./ListNode"
import { AbstractLinkedList } from "./AbstractLinkedList"

export class DoublyLinkedList extends AbstractLinkedList {
    constructor () {
        super()
    }

    addToFront(data: any): ListNode {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            new_node.next = this.head
            this.head.prev = new_node
            this.head = new_node
        }

        this.incrementSize()
        
        return new_node
    }

    addToBack(data: any): ListNode {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            new_node.prev = this.tail
            this.tail.next = new_node
            this.tail = new_node
        }
    
        this.incrementSize()

        return new_node
    }

    removeFromFront(): ListNode {
        const removed_node = this.head
        
        if (this.size == 0) {
            throw new Error("Can't remove from empty list")
        } 
        else if (this.size == 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = this.head.next
            this.head.prev = null
        }

        this.decrementSize()

        return removed_node
    }

    removeFromBack(): ListNode {
        const removed_node = this.tail

        if (this.size == 0) {
            throw new Error("Can't remove from empty list")
        }
        else if (this.size == 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = this.tail.prev
            this.tail.next = null
        }

        this.decrementSize()
        return removed_node
    }
}