import { ListNode } from "./ListNode"
import { AbstractLinkedList } from "./AbstractLinkedList"

export class SingleLinkedList extends AbstractLinkedList {
    constructor () {
        super()
    }

    addToFront (data: any) : ListNode {
        const new_node = new ListNode(data)
        
        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            new_node.next = this.head
            this.head = new_node
        }

        this.incrementSize()

        return new_node
    }

    addToBack (data: any) : ListNode {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            this.tail.next = new_node
            this.tail = new_node
        }

        this.incrementSize()

        return new_node
    }

    removeFromFront () : ListNode {
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
        }

        this.decrementSize()

        return removed_node
    }

    removeFromBack () : ListNode {
        const removed_node = this.tail

        if (this.size == 0) {
            throw new Error("Can't remove from empty list")
        }
        else if (this.size == 1) {
            this.head = null
            this.tail = null
        }
        else {
            let current_node = this.head
            for (let i = 1; i < this.size - 1; i++) {
                current_node = current_node.next
            }

            current_node.next = null
            this.tail = current_node
        }

        this.decrementSize()

        return removed_node
    }
}