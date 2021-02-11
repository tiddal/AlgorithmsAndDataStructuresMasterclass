import { Queue } from '../21_StacksAndQueues/Queue.mjs';
import { BinarySearchTree } from '../22_BinarySearchTrees/BinarySearchTree.mjs';

function depthFirstSearchPreOrder(tree) {
  let current = tree.root;
  const visited = [];
  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return visited;
}

function depthFirstSearchPostOrder(tree) {
  let current = tree.root;
  const visited = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }
  traverse(current);
  return visited;
}

function depthFirstSearchInOrder(tree) {
  let current = tree.root;
  const visited = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return visited;
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(depthFirstSearchPreOrder(tree));
console.log(depthFirstSearchPostOrder(tree));
console.log(depthFirstSearchInOrder(tree));
