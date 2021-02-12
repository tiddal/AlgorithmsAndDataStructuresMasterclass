import { Node } from "./Node.mjs";

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    let childIndex = this.values.push(newNode) - 1;
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      if (newNode.priority < this.values[parentIndex].priority) {
        [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
        childIndex = parentIndex;
      } else return this;
    }
    return this;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length <= 0) return min;
    this.values[0] = end;
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (swap === null && rightChild.priority < element.priority || swap !== null && rightChild.priority < leftChild.priority) swap = rightChildIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }

    return min;

  }

}

let pq = new PriorityQueue();
pq.enqueue("broken arm", 2);
pq.enqueue("common cold", 5);
pq.enqueue("high fever", 4);
pq.enqueue("glass in foot", 3);
pq.enqueue("gunshot wound", 1);
console.log(pq.dequeue());
console.log(pq.dequeue());
