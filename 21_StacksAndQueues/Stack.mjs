import { Node } from './Node.mjs';

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) this.first = newNode, this.last = newNode;
    else newNode.next = this.first, this.first = newNode;
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let nodeToPop = this.first;
    this.first = nodeToPop.next;
    nodeToPop.next = null;
    this.size--;
    if (this.size === 0) this.first = null, this.last = null;
    return nodeToPop.value;
  }
}

export { Stack };
