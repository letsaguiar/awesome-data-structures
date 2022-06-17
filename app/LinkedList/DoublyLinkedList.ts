import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";
import { ListBasedReturnOptionsDto } from "../../config/ReturnOptions";

export class DoublyLinkedList extends AbstractLinkedList {
    addToFront (data: any): void {
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
    }

    addToBack (data: any): void {
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
    }

    private rInsertAt (data: any, index: number) {
        const new_node = new ListNode(data)
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index, {returnNode: true})

        prev_node.next = new_node
        next_node.prev = new_node
        new_node.next = next_node
        new_node.prev = prev_node

        this.incrementSize()
    }

    insertAt (data: any, index: number): void {
        this.checkIndexRange(index)

        if (index == 0) {
            return this.addToFront(data)
        }
        else {
            return this.rInsertAt(data, index)
        }
    }

    removeFromFront (returnOptions?: ListBasedReturnOptionsDto) {
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

        return this.returnOptions(removed_node, returnOptions)
    }

    removeFromBack (returnOptions?: ListBasedReturnOptionsDto) {
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

        return this.returnOptions(removed_node, returnOptions)
    }

    private rDeleteAt (index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        const removed_node = this.at(index, {returnNode: true})
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index + 1, {returnNode: true})

        prev_node.next = next_node
        next_node.prev = prev_node

        this.decrementSize()

        return this.returnOptions(removed_node, returnOptions)
    }

    deleteAt (index: number, returnOptions?: ListBasedReturnOptionsDto) {
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