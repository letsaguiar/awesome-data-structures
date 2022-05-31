import { DoublyLinkedList } from '..//LinkedList/DoublyLinkedList'

export class Deque extends DoublyLinkedList {
    get begin () {
        return this.head
    }

    get end () {
        return this.tail
    }

    push_front (data: any) : void {
        return this.addToFront(data)
    }

    push_back (data: any) : void {
        return this.addToBack(data)
    }

    pop_front () : any {
        return this.removeFromFront()
    }

    pop_back () : any {
        return this.removeFromBack()
    }
}