export class BSTNode {
  public data: any;

  public left: BSTNode;

  public right: BSTNode;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  get childCount() : number {
    if (!this.left && !this.right) {
      return 0;
    }

    if (!this.left || !this.right) {
      return 1;
    }

    return 2;
  }
}
