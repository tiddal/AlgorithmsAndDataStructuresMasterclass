import { Node } from "./Node.mjs";

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) this.head = newNode, this.tail = newNode;
    else this.tail.next = newNode, this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = null, this.tail = null;
    return current.val;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead.val;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    let oldHead = this.head;
    const newNode = new Node(val);
    newNode.next = oldHead;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
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
    this.length--;
    return removedNode.val;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nextNode;
    let previousNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = nextNode;
    }

    return this;
  }

}

