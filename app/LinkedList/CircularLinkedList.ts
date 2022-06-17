import { AbstractLinkedList } from './AbstractLinkedList';
import { ListNode } from './ListNode';
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions';

export class CircularLinkedList extends AbstractLinkedList {
  addToFront(data: any): void {
    const newNode = new ListNode(data);

    if (this.size === 0) {
      this.tail = newNode;
      this.tail.next = newNode;
    } else if (this.size === 1) {
      this.tail.next = newNode;
      newNode.next = this.tail;
    } else {
      newNode.next = this.tail.next;
      this.tail.next = newNode;
    }

    this.incrementSize();
  }

  addToBack(data: any): void {
    const newNode = new ListNode(data);

    if (this.size === 0) {
      this.tail = newNode;
      this.tail.next = newNode;
    } else if (this.size === 1) {
      this.tail.next = newNode;
      newNode.next = this.tail;
      this.tail = newNode;
    } else {
      newNode.next = this.tail.next;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.incrementSize();
  }

  private rInsertAt(data: any, index: number): void {
    const newNode = new ListNode(data);
    const prevNode = this.at(index - 1, { returnNode: true });
    const nextNode = this.at(index, { returnNode: true });

    prevNode.next = newNode;
    newNode.next = nextNode;

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
    const removedNode = this.tail?.next ?? this.tail;

    if (this.size === 0) {
      throw new Error("Can't remove from empty list");
    } else if (this.size === 1) {
      this.tail = null;
    } else {
      this.tail.next = this.tail.next.next;
    }

    this.decrementSize();

    return this.returnOptions(removedNode, returnOptions);
  }

  removeFromBack(returnOptions?: ListBasedReturnOptionsDto) {
    const removedNode = this.tail;

    if (this.size === 0) {
      throw new Error("Can't remove from empty list");
    } else if (this.size === 1) {
      this.tail = null;
    } else {
      let currentNode = this.tail.next;

      do {
        currentNode = currentNode.next;
      } while (currentNode.next !== this.tail);

      currentNode.next = this.tail.next;
      this.tail = currentNode;
    }

    this.decrementSize();

    return this.returnOptions(removedNode, returnOptions);
  }

  private rDeleteAt(index: number, returnOptions?: ListBasedReturnOptionsDto) {
    const removedNode = this.at(index, { returnNode: true });
    const prevNode = this.at(index - 1, { returnNode: true });
    const nextNode = this.at(index + 1, { returnNode: true });

    prevNode.next = nextNode;

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

  findIndex(data: any) : number {
    let currentNode = this.tail.next;
    let index = 0;

    do {
      if (currentNode.data === data) break;

      currentNode = currentNode.next;
      index += 1;
    } while (currentNode !== this.tail.next);

    return currentNode.data === data ? index : -1;
  }

  find(data: any, returnOptions?: ListBasedReturnOptionsDto) {
    let currentNode = this.tail.next;

    do {
      if (currentNode.data === data) break;
      currentNode = currentNode.next;
    } while (currentNode !== this.tail.next);

    if (currentNode.data !== data) currentNode = null;

    return this.returnOptions(currentNode, returnOptions);
  }

  at(index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
    this.checkIndexRange(index);

    let currentNode = this.tail.next;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return this.returnOptions(currentNode, returnOptions);
  }

  toArray() : Array <any> {
    let currentNode = this.tail.next;
    const array = [];

    do {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    } while (currentNode !== this.tail.next);

    return array;
  }
}
