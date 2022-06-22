import { BSTBasedReturnOptionsDto } from '../../config/ReturnOptions';
import { BSTNode } from './BSTNode';

export class BST {
  private rRoot: BSTNode;

  private rSize: number;

  constructor() {
    this.rRoot = null;
    this.rSize = 0;
  }

  public root(returnOptions?: BSTBasedReturnOptionsDto) {
    return this.returnOptions(this.rRoot, returnOptions);
  }

  public size() {
    return this.rSize;
  }

  public isEmpty() : boolean {
    return this.rRoot === null && this.rSize === 0;
  }

  public clear() : void {
    this.rRoot = null;
    this.rSize = 0;
  }

  private returnOptions(node: BSTNode, returnOptions?: BSTBasedReturnOptionsDto) : any {
    if (returnOptions?.returnNode) {
      return this.returnNode(node);
    }

    return this.returnData(node);
  }

  private returnNode(node: BSTNode) : BSTNode {
    return node;
  }

  private returnData(node: BSTNode) : any {
    return node?.data;
  }

  public contains(data: any) : boolean {
    if (!data) throw Error('data cannot be null');

    return this.find(data) !== undefined;
  }

  public find(data: any, returnOptions?: BSTBasedReturnOptionsDto) : any {
    const node = this.rFind(data, this.rRoot);
    return this.returnOptions(node, returnOptions);
  }

  private rFind(data: any, currentNode: BSTNode) : any {
    if (!data) throw Error('data cannot be null');
    if (!currentNode) return null;

    if (data < currentNode.data) {
      return this.rFind(data, currentNode.left);
    }
    if (data > currentNode.data) {
      return this.rFind(data, currentNode.right);
    }

    return currentNode;
  }

  public insert(data: any) : void {
    this.rRoot = this.rInsert(data, this.rRoot);
  }

  private rInsert(data: any, currentNode: BSTNode) : BSTNode {
    if (!currentNode) {
      this.rSize += 1;
      return new BSTNode(data);
    }

    if (data < currentNode.data) {
      currentNode.left = this.rInsert(data, currentNode.left);
    } else if (data > currentNode.data) {
      currentNode.right = this.rInsert(data, currentNode.right);
    }

    return currentNode;
  }

  public remove(data: any, returnOptions?: BSTBasedReturnOptionsDto) : void {
    const dummy1 = new BSTNode(-1);
    this.rRoot = this.rFindNodeToRemove(data, this.rRoot, dummy1);

    return this.returnOptions(dummy1, returnOptions);
  }

  private rFindNodeToRemove(data: any, currentNode: BSTNode, dummy: BSTNode) : BSTNode {
    if (!currentNode) return null;

    if (data < currentNode.data) {
      currentNode.left = this.rFindNodeToRemove(data, currentNode.left, dummy);
    } else if (data > currentNode.data) {
      currentNode.right = this.rFindNodeToRemove(data, currentNode.right, dummy);
    } else {
      this.rSize -= 1;
      dummy.data = currentNode.data;
      return this.rRemove(currentNode);
    }

    return currentNode;
  }

  private rRemove(node: BSTNode) : BSTNode {
    if (node.childCount === 0) {
      return null;
    }

    if (node.childCount === 1) {
      return node.left ?? node.right;
    }

    const dummy2 = new BSTNode(-1);
    node.right = this.rRemoveSuccessor(node.right, dummy2);
    node.data = dummy2.data;

    return node;
  }

  private rRemoveSuccessor(node: BSTNode, dummy: BSTNode) : BSTNode {
    if (!node.left) {
      dummy.data = node.data;
      return node.right;
    }

    node.left = this.rRemoveSuccessor(node.left, dummy);
  }
}
