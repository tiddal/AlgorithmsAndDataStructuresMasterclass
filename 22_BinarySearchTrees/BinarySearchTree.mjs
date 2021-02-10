import { Node } from './Node.mjs';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) { this.root = newNode; return this; }
    let notInPlace = true;
    let parent = this.root;
    while (notInPlace) {
      if (parent.value > newNode.value) {
        if (!parent.left) parent.left = newNode, notInPlace = false;
        else parent = parent.left;
      }
      else if (parent.value < newNode.value) {
        if (!parent.right) parent.right = newNode, notInPlace = false;
        else parent = parent.right;
      } else return undefined;
    }
    return this;
  }

  find(value) {
    if (!this.root) return false;
    let parent = this.root;
    while (true) {
      if (parent.value > value) {
        if (!parent.left) return false;
        parent = parent.left;
      }
      else if (parent.value < value) {
        if (!parent.right) return false;
        parent = parent.right;
      } else return parent;
    }
  }
}

export { BinarySearchTree };
