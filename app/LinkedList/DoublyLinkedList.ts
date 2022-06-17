import { AbstractLinkedList } from './AbstractLinkedList';
import { ListNode } from './ListNode';
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions';

export class DoublyLinkedList extends AbstractLinkedList {
  addToFront(data: any): void {
    const newNode = new ListNode(data);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.incrementSize();
  }

  addToBack(data: any): void {
    const newNode = new ListNode(data);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.incrementSize();
  }

  private rInsertAt(data: any, index: number) {
    const newNode = new ListNode(data);
    const prevNode = this.at(index - 1, { returnNode: true });
    const nextNode = this.at(index, { returnNode: true });

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;

    this.incrementSize();
  }

  insertAt(data: any, index: number): void {
    this.checkIndexRange(index);

    if (index === 0) {
      return this.addToFront(data);
    }

    return this.rInsertAt(data, index);
  }

  removeFromFront(returnOptions?: ListBasedReturnOptionsDto) {
    const removedNode = this.head;

    if (this.size === 0) {
      throw new Error("Can't remove from empty list");
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.decrementSize();

    return this.returnOptions(removedNode, returnOptions);
  }

  removeFromBack(returnOptions?: ListBasedReturnOptionsDto) {
    const removedNode = this.tail;

    if (this.size === 0) {
      throw new Error("Can't remove from empty list");
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.decrementSize();

    return this.returnOptions(removedNode, returnOptions);
  }

  private rDeleteAt(index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
    const removedNode = this.at(index, { returnNode: true });
    const prevNode = this.at(index - 1, { returnNode: true });
    const nextNode = this.at(index + 1, { returnNode: true });

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.decrementSize();

    return this.returnOptions(removedNode, returnOptions);
  }

  deleteAt(index: number, returnOptions?: ListBasedReturnOptionsDto) {
    this.checkIndexRange(index);

    if (index === 0) {
      return this.removeFromFront(returnOptions);
    }
    if (index === this.size - 1) {
      return this.removeFromBack(returnOptions);
    }

    return this.rDeleteAt(index, returnOptions);
  }
}
