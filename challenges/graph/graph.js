class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addNode(v) {
    this.AdjList.set(v, []);
    return this.AdjList;
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  getNodes() {
    const getKeys = this.AdjList.keys();
    let array = [];
    for(let i = 0; i < this.noOfVertices; i++) {
      array.push(getKeys.next().value);
    }
    return array;
  }

  getNeighbors() {

  }
  
  size() {

  }
}

module.exports = Graph;
