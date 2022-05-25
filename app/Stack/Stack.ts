import { SingleLinkedList } from '../LinkedList/SingleLinkedList'

export class Stack extends SingleLinkedList{
    constructor () {
        super()
    }

    push (data: any) {
        this.addToFront(data)
    }

    pop () {
        this.removeFromFront()
    }

    peek () {
        return this.head
    }
}