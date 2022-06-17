import { SinglyLinkedList } from '../LinkedList/SinglyLinkedList';
import { ListBasedReturnOptionsDto } from '../../config/ReturnOptions';

export class Stack {
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

  push(data: any) {
    return this.list.addToFront(data);
  }

  pop(returnOptions?: ListBasedReturnOptionsDto) {
    return this.list.removeFromFront(returnOptions);
  }

  isEmpty() {
    return !this.size() && !this.end() && !this.begin();
  }

  clear() {
    this.list.head = null;
    this.list.tail = null;
    this.list.size = 0;
  }
}
