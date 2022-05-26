import { DoublyLinkedList } from '../LinkedList/DoublyLinkedList'

export class Deque extends DoublyLinkedList {
    push_front (data: any) {
        return this.addToFront(data)
    }

    push_back (data: any) {
        return this.addToBack(data)
    }

    pop_front () {
        return this.removeFromFront()
    }

    pop_back () {
        return this.removeFromBack()
    }

    begin () {
        return this.head
    }

    end () {
        return this.tail
    }
} 