/* eslint-disable no-unused-vars */

import { ListNode } from './ListNode';
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions';

export class AbstractLinkedList {
  public head: ListNode;

  public tail: ListNode;

  public size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  incrementSize() : void {
    this.size += 1;
  }

  decrementSize() : void {
    if (this.size === 0) {
      throw new Error("Can't decrement empty list size");
    }

    this.size -= 1;
  }

  checkIndexRange(index: number) : void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index Out Of Range');
    }
  }

  returnOptions(node: ListNode, returnOptions?: ListBasedReturnOptionsDto) : any {
    if (returnOptions?.returnNode) {
      return this.returnNode(node);
    }
    if (returnOptions?.returnIndex) {
      return this.returnIndex(node);
    }

    return this.returnData(node);
  }

  private returnNode(node: ListNode) : ListNode {
    return node;
  }

  private returnIndex(node: ListNode) : Number {
    return this.findIndex(node?.data);
  }

  private returnData(node: ListNode) : any {
    return node?.data;
  }

  addToFront(data: any) : void {
    throw new Error('Method not implemented');
  }

  addToBack(data: any) : void {
    throw new Error('Method not implemented');
  }

  insertAt(data: any, index: number) : void {
    throw new Error('Method not implemented');
  }

  removeFromFront(returnOptions?: ListBasedReturnOptionsDto) : any {
    throw new Error('Method not implemented');
  }

  removeFromBack(returnOptions?: ListBasedReturnOptionsDto) : any {
    throw new Error('Method not implemented');
  }

  deleteAt(index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
    throw new Error('Method not implemented');
  }

  findIndex(data: any) : number {
    let currentNode = this.head;
    let index = 0;

    while (currentNode != null) {
      if (currentNode.data === data) break;

      currentNode = currentNode.next;
      index += 1;
    }

    return currentNode != null ? index : -1;
  }

  find(data: any, returnOptions?: ListBasedReturnOptionsDto) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data === data) break;

      currentNode = currentNode.next;
    }

    return this.returnOptions(currentNode, returnOptions);
  }

  findAndRemove(data: any, returnOptions?: ListBasedReturnOptionsDto) {
    const nodeIndex = this.find(data, { returnIndex: true });

    if (nodeIndex === -1) {
      throw new Error('Element not found!');
    }

    return this.deleteAt(nodeIndex, returnOptions);
  }

  at(index: number, returnOptions?: ListBasedReturnOptionsDto) : any {
    this.checkIndexRange(index);

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return this.returnOptions(currentNode, returnOptions);
  }

  toArray() : Array <any> {
    let currentNode = this.head;
    const array = [];

    while (currentNode != null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }

  contains(data: any) : boolean {
    const node = this.find(data);
    return !!node;
  }

  isEmpty() : boolean {
    return this.head === null && this.tail === null && this.size === 0;
  }

  clear() : void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
