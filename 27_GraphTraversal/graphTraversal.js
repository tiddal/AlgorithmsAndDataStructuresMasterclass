import { Graph } from '../26_Graphs/Graph.mjs';

function recursiveDFS(graph, start) {
  const endResult = [];
  const visited = {};

  (function dfs(vertex) {
    if (!graph.adjacencyList[vertex]) return null;
    visited[vertex] = graph.adjacencyList[vertex];
    endResult.push(vertex);
    for (let neighbor of graph.adjacencyList[vertex]) {
      if (!visited[neighbor]) dfs(neighbor);
    }
  })(start);

  return endResult;

}

function iterativeDFS(graph, start) {
  const stk = [start];
  const endResult = [];
  const visited = { [start]: true };

  while (stk.length) {
    let vertex = stk.pop();
    endResult.push(vertex);
    for (let neighbor of graph.adjacencyList[vertex]) {
      if (!visited[neighbor]) visited[neighbor] = true, stk.push(neighbor);
    }
  }
  return endResult;
}

function iterativeBFS(graph, start) {
  const q = [start];
  const endResult = [];
  const visited = { [start]: true };

  while (q.length) {
    let vertex = q.shift();
    endResult.push(vertex);
    for (let neighbor of graph.adjacencyList[vertex]) {
      if (!visited[neighbor]) visited[neighbor] = true, q.push(neighbor);
    }
  }
  return endResult;
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(recursiveDFS(g, "B"));
console.log(iterativeDFS(g, "B"));
console.log(iterativeBFS(g, "B"));
