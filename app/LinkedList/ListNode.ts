export class ListNode {
  data: any;

  next: ListNode;

  prev: ListNode;

  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
