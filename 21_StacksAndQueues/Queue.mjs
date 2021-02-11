import { Node } from './Node.mjs';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) this.first = newNode, this.last = newNode;
    else this.last.next = newNode; this.last = newNode;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let nodeToPop = this.first;
    this.first = nodeToPop.next;
    nodeToPop.next = null;
    this.size--;
    if (this.size === 0) this.first = null, this.last = null;
    return nodeToPop;
  }
}

export { Queue };
