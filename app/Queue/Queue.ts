import { SingleLinkedList } from "../LinkedList/SingleLinkedList";

export class Queue extends SingleLinkedList {
    enqueue (data: any) {
        return this.addToBack(data)
    }

    dequeue () {
        return this.removeFromFront()
    }

    peek () {
        return this.head?.data
    }
}