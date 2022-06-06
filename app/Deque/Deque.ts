import { DoublyLinkedList } from '..//LinkedList/DoublyLinkedList'

export class Deque {
    private list: DoublyLinkedList

    constructor () {
        this.list = new DoublyLinkedList()
    }

    get size () {
        return this.list.size
    }

    get begin () {
        return this.list.head?.data || null
    }

    get end () {
        return this.list.tail?.data || null
    }

    push_front (data: any) : void {
        return this.list.addToFront(data)
    }

    push_back (data: any) : void {
        return this.list.addToBack(data)
    }

    pop_front () : any {
        return this.list.removeFromFront()
    }

    pop_back () : any {
        return this.list.removeFromBack()
    }

    isEmpty () {
        return this.size == 0 && this.end == null && this.begin == null
    }

    clear () {
        this.list.head = null
        this.list.tail = null
        this.list.size = 0
    }
}