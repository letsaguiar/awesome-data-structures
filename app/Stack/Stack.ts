import { SingleLinkedList } from '../LinkedList/SingleLinkedList'

export class Stack extends SingleLinkedList{
    constructor () {
        super()
    }

    push (data: any) {
        return this.addToFront(data)
    }

    pop () {
        return this.removeFromFront()
    }

    peek () {
        return this.head?.data
    }
}