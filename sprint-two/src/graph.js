

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (node in this.nodes) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (const val of this.nodes[node]) {
    this.removeEdge(node, val);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  const fromNodeCheck = _.contains(this.nodes[fromNode], toNode);
  const toNodeCheck = _.contains(this.nodes[toNode], fromNode);
  return fromNodeCheck && toNodeCheck;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(+fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  const fromNodeIndex = _.indexOf(this.nodes[fromNode], toNode);
  const toNodeIndex = _.indexOf(this.nodes[toNode], fromNode);

  this.nodes[fromNode].splice(fromNodeIndex, 1);
  this.nodes[toNode].splice(toNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n)
 * addEdge: O(1)
 * removeEdge: O(n)
 * hasEdge: O(n)
 * forEachNode: O(n)
 */
