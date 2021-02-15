import { PriorityQueue } from './PriorityQueue.mjs';
import { WeightedGraph } from './WeightedGraph.mjs';

function dijkstra(graph, startVertex, endVertex) {
  const distances = {};
  Object.keys(graph.adjacencyList).map((vertex) => distances[vertex] = Infinity);
  distances[startVertex] = 0;

  const pq = new PriorityQueue();
  Object.keys(distances).map((vertex) => pq.enqueue(vertex, distances[vertex]));

  const previous = {};
  Object.keys(distances).map((vertex) => previous[vertex] = null);

  const path = [];

  while (pq.values.length) {
    let { value: vertex, priority } = pq.dequeue();
    if (vertex === endVertex) {
      while (previous[vertex]) {
        path.push(vertex);
        vertex = previous[vertex];
      }
      return path.concat(startVertex).reverse();
    };
    for (let neighbor of graph.adjacencyList[vertex]) {
      let distance = priority + neighbor.weight;
      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        previous[neighbor.node] = vertex;
        pq.enqueue(neighbor.node, distance);
      };
    }
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(dijkstra(graph, "A", "E"));
