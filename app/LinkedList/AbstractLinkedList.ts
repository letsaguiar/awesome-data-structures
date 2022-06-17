import { ListNode } from "./ListNode"
import { ListBasedReturnOptionsDto } from "../../config/ReturnOptions"

export class AbstractLinkedList {
    public head: ListNode
    public tail: ListNode
    public size: number

    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    incrementSize () : void {
        this.size += 1
    }

    decrementSize () : void {
        if (this.size == 0) {
            throw new Error ("Can't decrement empty list size")
        }

        this.size -= 1
    }

    checkIndexRange (index: number) : void {
        if (index < 0 || index >= this.size) {
            throw new Error('Index Out Of Range')
        }
    }

    returnOptions(node: ListNode, returnOptions?: ListBasedReturnOptionsDto) : any {

        if (returnOptions?.returnNode) {
            return this.returnNode(node)
        }
        else if (returnOptions?.returnIndex) {
            return this.returnIndex(node)
        }
        else {
            return this.returnData(node)
        }

    }

    private returnNode (node: ListNode) : ListNode {
        return node;
    }

    private returnIndex (node: ListNode) : Number {
        return this.findIndex(node?.data);
    }

    private returnData (node: ListNode) : any {
        return node?.data;
    }

    addToFront (data: any) : void {
        throw new Error('Method not implemented')
    }

    addToBack (data: any) : void {
        throw new Error('Method not implemented')
    }

    insertAt (data: any, index: number) : void {
        throw new Error('Method not implemented')
    }

    removeFromFront (returnOptions?: ListBasedReturnOptionsDto) : any {
        throw new Error('Method not implemented')
    }

    removeFromBack (returnOptions?: ListBasedReturnOptionsDto) : any {
        throw new Error('Method not implemented')
    }

    deleteAt (index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        throw new Error('Method not implemented')
    }

    findIndex (data: any) : number {
        let current_node = this.head
        let index = 0

        while (current_node != null) {
            if (current_node.data == data) break

            current_node = current_node.next
            index = index + 1
        }

        return current_node != null ? index : -1
    }

    find (data: any, returnOptions?: ListBasedReturnOptionsDto) {
        let current_node = this.head

        while (current_node != null) {
            if (current_node.data == data) break

            current_node = current_node.next
        }

        return this.returnOptions(current_node, returnOptions)
    }

    findAndRemove (data: any, returnOptions?: ListBasedReturnOptionsDto) {
        const node_index = this.find(data, {returnIndex: true})

        if (node_index == -1) {
            throw new Error('Element not found!')
        }

        return this.deleteAt(node_index, returnOptions)
    }

    at (index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
        this.checkIndexRange(index)

        let current_node = this.head
        for (let i=0; i < index; i++) {
            current_node = current_node.next
        }

        return this.returnOptions(current_node, returnOptions)
    }

    toArray () : Array <any> {
        let current_node = this.head
        const array = []

        while (current_node != null) {
            array.push(current_node.data)
            current_node = current_node.next
        }

        return array
    }

    contains (data: any) : boolean {
        const node = this.find(data)
        return node ? true : false
    }

    isEmpty () : boolean {
        return this.head == null && this.tail == null && this.size == 0
    }

    clear () : void {
        this.head = null
        this.tail = null
        this.size = 0
    }
}