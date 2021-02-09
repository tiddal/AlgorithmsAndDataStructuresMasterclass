import { Node } from './Node.mjs';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode, newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const removedItem = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = null, this.tail = null;
    return removedItem.val;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.length--;
    if (this.length === 0) { this.head = null, this.tail = null; return oldHead.val; }
    this.head = this.head.next;
    this.head.previous = null;
    return oldHead.val;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    const newHead = new Node(val);
    this.head.previous = newHead;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter, current;
    if (idx <= this.length / 2) {
      counter = 0, current = this.head;
      while (counter !== idx) current = current.next, counter++;
    } else {
      counter = this.length - 1, current = this.tail;
      while (counter !== idx) current = current.previous, counter--;
    }
    return current;
  }

  set(idx, val) {
    const foundedNode = this.get(idx);
    if (!foundedNode) return false;
    foundedNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    const previousNode = this.get(idx - 1);
    const newNode = new Node(val);
    newNode.next = previousNode.next;
    newNode.next.previous = newNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const previousNode = this.get(idx - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    removedNode.next.previous = previousNode;
    this.length--;
    return removedNode.val;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    for (let i = 0; i < this.length; i++) {
      let previousNode = node.next;
      node.next = node.previous;
      node = previousNode;
    }
    return this;
  }
}

let dl = new DoublyLinkedList;
dl.push(10).push(15).push(20);
dl.reverse();
console.log(dl.length);
console.log(dl.head.val);




export { DoublyLinkedList };
