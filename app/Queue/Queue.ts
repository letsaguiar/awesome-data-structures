import { SingleLinkedList } from "../LinkedList/SingleLinkedList";

export class Queue {
    private list: SingleLinkedList
    
    constructor () {
        this.list = new SingleLinkedList()
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

    enqueue (data: any) {
        return this.list.addToBack(data)
    }

    dequeue () {
        return this.list.removeFromFront()
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