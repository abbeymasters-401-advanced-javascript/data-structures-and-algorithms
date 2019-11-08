const Graph = require('../challenges/graph/graph');

describe('testing Graph class', () => {

  it('can successfully add a node', () => {
    let newGraph = new Graph(1);
    const vertices = ['A'];
    for (let i = 0; i < vertices.length; i++) {
      newGraph.addNode(vertices[i]);
    }

    expect(newGraph.getNodes()).toEqual(['A']);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let newGraph = new Graph(6);
    let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < vertices.length; i++) {
      newGraph.addNode(vertices[i]);
    }
    newGraph.addEdge('A', 'B');
    newGraph.addEdge('A', 'D');
    newGraph.addEdge('A', 'E');
    newGraph.addEdge('B', 'C');
    newGraph.addEdge('D', 'E');
    newGraph.addEdge('E', 'F');
    newGraph.addEdge('E', 'C');
    newGraph.addEdge('C', 'F');
    expect(newGraph.getNodes()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

});