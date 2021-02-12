class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let childIndex = this.values.push(value) - 1;
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      if (value > this.values[parentIndex]) {
        [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
        childIndex = parentIndex;
      } else return this;
    }
    return this;
  }

  extractMax() {
    const oldRootIndex = 0;
    let newRootIndex = this.values.length - 1;
    [this.values[oldRootIndex], this.values[newRootIndex]] = [this.values[newRootIndex], this.values[oldRootIndex]];
    const oldRoot = this.values.pop();
    if (this.values.length === 0) return oldRoot;
    newRootIndex = 0;
    let inPlace = false;
    while (!inPlace) {
      let maxParent = Math.max(this.values[newRootIndex], this.values[2 * newRootIndex + 1], this.values[2 * newRootIndex + 2]);
      let maxParentIndex = this.values.indexOf(maxParent);
      if (maxParent > this.values[newRootIndex]) {
        [this.values[newRootIndex], this.values[maxParentIndex]] = [this.values[maxParentIndex], this.values[newRootIndex]];
        newRootIndex = maxParentIndex;
      } else inPlace = true;
    }
    return oldRoot;
  }

}

let mbh = new MaxBinaryHeap();
mbh.insert(41);

mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.extractMax();
console.log(mbh);
