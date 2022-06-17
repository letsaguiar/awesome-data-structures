import { SinglyLinkedList } from '../LinkedList/SinglyLinkedList';
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions';

export class Queue {
  private list: SinglyLinkedList;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  size() : number {
    return this.list.size;
  }

  begin(returnOptions?: ListBasedReturnOptionsDto) : any {
    return this.list.returnOptions(this.list.head, returnOptions);
  }

  end(returnOptions?: ListBasedReturnOptionsDto) : any {
    return this.list.returnOptions(this.list.tail, returnOptions);
  }

  enqueue(data: any) {
    return this.list.addToBack(data);
  }

  dequeue(returnOptions?: ListBasedReturnOptionsDto) {
    return this.list.removeFromFront(returnOptions);
  }

  isEmpty() {
    return this.size() === 0 && this.end() === null && this.begin() === null;
  }

  clear() {
    this.list.head = null;
    this.list.tail = null;
    this.list.size = 0;
  }
}
