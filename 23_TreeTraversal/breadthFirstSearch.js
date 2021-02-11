import { Queue } from '../21_StacksAndQueues/Queue.mjs';
import { BinarySearchTree } from '../22_BinarySearchTrees/BinarySearchTree.mjs';

function breadthFirstSearch(tree) {
  const queue = [];
  const visited = [];
  let node = tree.root;
  queue.push(node);

  while (queue.length) {
    node = queue.shift();
    visited.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visited;
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(breadthFirstSearch(tree));
