import { ListNode } from "./ListNode"
import { AbstractLinkedList } from "./AbstractLinkedList"
import { ListBasedReturnOptionsDto } from "../../config/ReturnOptions"

export class SinglyLinkedList extends AbstractLinkedList {
    addToFront (data: any) : any {
        const new_node = new ListNode(data)
        
        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            new_node.next = this.head
            this.head = new_node
        }

        this.incrementSize()
    }

    addToBack (data: any) : any {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.head = new_node
            this.tail = new_node
        } else {
            this.tail.next = new_node
            this.tail = new_node
        }

        this.incrementSize()
    }

    private rInsertAt (data: any, index: number) : void {
        const new_node = new ListNode(data)
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index, {returnNode: true})

        prev_node.next = new_node
        new_node.next = next_node

        this.incrementSize()
    }

    insertAt(data: any, index: number): void {
        this.checkIndexRange(index)

        if (index == 0) {
            return this.addToFront(data)
        }
        else {
            return this.rInsertAt(data, index)
        }
        
    }

    removeFromFront (returnOptions?: ListBasedReturnOptionsDto) : any {
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

        return this.returnOptions(removed_node, returnOptions)
    }

    removeFromBack (returnOptions?: ListBasedReturnOptionsDto) : any {
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

        return this.returnOptions(removed_node, returnOptions)
    }

    private rDeleteAt (index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        const removed_node = this.at(index, {returnNode: true})
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index + 1, {returnNode: true})

        prev_node.next = next_node

        this.decrementSize()

        return this.returnOptions(removed_node, returnOptions)
    }

    deleteAt(index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        this.checkIndexRange(index)

        if (index == 0) {
            return this.removeFromFront(returnOptions)
        }
        else if (index == this.size - 1) {
            return this.removeFromBack(returnOptions)
        }
        else {
            return this.rDeleteAt(index, returnOptions)
        }

    }
}