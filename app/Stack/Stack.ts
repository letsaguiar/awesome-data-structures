import { SingleLinkedList } from '../LinkedList/SingleLinkedList'

export class Stack{
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

    push (data: any) {
        return this.list.addToFront(data)
    }

    pop () {
        return this.list.removeFromFront()
    }
}