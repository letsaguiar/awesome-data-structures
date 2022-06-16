import { DoublyLinkedList } from '..//LinkedList/DoublyLinkedList'
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions'

export class Deque {
    private list: DoublyLinkedList

    constructor () {
        this.list = new DoublyLinkedList()
    }

    size () : number {
        return this.list.size
    }

    begin (returnOptions?: ListBasedReturnOptionsDto) : any {
        return this.list.returnOptions(this.list.head, returnOptions)
    }

    end (returnOptions?: ListBasedReturnOptionsDto) : any {
        return this.list.returnOptions(this.list.tail, returnOptions)
    }

    push_front (data: any) : void {
        return this.list.addToFront(data)
    }

    push_back (data: any) : void {
        return this.list.addToBack(data)
    }

    pop_front (returnOptions?: ListBasedReturnOptionsDto) : any {
        return this.list.removeFromFront(returnOptions)
    }

    pop_back (returnOptions?: ListBasedReturnOptionsDto) : any {
        return this.list.removeFromBack(returnOptions)
    }

    isEmpty () {
        return this.size() == 0 && this.end() == null && this.begin() == null
    }

    clear () {
        this.list.head = null
        this.list.tail = null
        this.list.size = 0
    }
}