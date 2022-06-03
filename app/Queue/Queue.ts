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
}