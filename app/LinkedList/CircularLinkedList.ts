import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";
import { ListBasedReturnOptionsDto } from "../../config/ReturnOptions";

export class CircularLinkedList extends AbstractLinkedList {
    addToFront(data: any): void {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.tail = new_node
            this.tail.next = new_node
        }
        else if (this.size == 1) {
            this.tail.next = new_node
            new_node.next = this.tail
        }
        else {
            new_node.next = this.tail.next
            this.tail.next = new_node
        }

        this.incrementSize()
    }

    addToBack(data: any): void {
        const new_node = new ListNode(data)

        if (this.size == 0) {
            this.tail = new_node
            this.tail.next = new_node
        }
        else if (this.size == 1) {
            this.tail.next = new_node
            new_node.next = this.tail
            this.tail = new_node
        }
        else {
            new_node.next = this.tail.next
            this.tail.next = new_node
            this.tail = new_node
        }

        this.incrementSize()
    }

    private rInsertAt (data: any, index: number): void {
        const new_node = new ListNode(data)
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index, {returnNode: true})

        prev_node.next = new_node
        new_node.next = next_node

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
        const removed_node = this.tail?.next ?? this.tail

        if (this.size == 0) {
            throw new Error("Can't remove from empty list")
        }
        else if (this.size == 1) {
            this.tail = null
        }
        else {
            this.tail.next = this.tail.next.next
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
            this.tail = null
        }
        else {
            let current_node = this.tail.next

            do {
                current_node = current_node.next
            } while (current_node.next != this.tail)

            current_node.next = this.tail.next
            this.tail = current_node
        }

        this.decrementSize()

        return this.returnOptions(removed_node, returnOptions)
    }

    private rDeleteAt (index: number, returnOptions?: ListBasedReturnOptionsDto) {
        const removed_node = this.at(index, {returnNode: true})
        const prev_node = this.at(index - 1, {returnNode: true})
        const next_node = this.at(index + 1, {returnNode: true})

        prev_node.next = next_node

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

    findIndex(data: any) : number {
        let current_node = this.tail.next
        let index = 0

        do {
            if (current_node.data == data) break

            current_node = current_node.next
            index = index + 1
        } while (current_node != this.tail.next)

        return current_node.data == data ? index : -1
    }

    find(data: any, returnOptions?: ListBasedReturnOptionsDto) {
        let current_node = this.tail.next

        do {
            if (current_node.data == data) break
            current_node = current_node.next
        } while (current_node != this.tail.next)

        if (current_node.data != data) current_node = null

        return this.returnOptions(current_node, returnOptions)
    }

    at (index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        this.checkIndexRange(index)

        let current_node = this.tail.next
        for (let i=0; i < index; i++) {
            current_node = current_node.next
        }

        return this.returnOptions(current_node, returnOptions)
    }

    toArray () : Array <any> {
        let current_node = this.tail.next
        const array = []

        do {
            array.push(current_node.data)
            current_node = current_node.next
        } while (current_node != this.tail.next)

        return array
    }
}