import { SingleLinkedList } from "../LinkedList/SingleLinkedList";

export class Queue extends SingleLinkedList {
    enqueue (data: any) {
        this.addToBack(data)
    }

    dequeue () {
        this.removeFromFront()
    }

    peek () {
        return this.head
    }
}