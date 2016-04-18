// Weak Implementation without use of priority queue.

var Graph = function (v) {
  this.v = v;
  this.adj = [];
  this.edges = [];
  for (var i = 0; i < v; i++) this.adj.push([]);
}
Graph.prototype.addEdge = function (v, w, ww) {
  var edge1 = new Edge(v, w, ww);
  var edge2 = new Edge(w, v, ww);
  this.adj[v].push(edge1);
  this.adj[w].push(edge2);
}

var ShortestPath = function (graph, s) {
  this.s = s;
  this.g = graph;
  this.q = [];
  this.edgeTo = [];
  this.relaxed = [];
  this.distTo = [];
  this.distTo[s] = 0;
  this.lastV = null;
  this.visit(s);
  this.distTo[s] = 0;
  this.edgeTo[s] = null;
}
ShortestPath.prototype.findClosest = function () {
  var min = 1/0;
  var v;
  for (var i = 0; i < this.distTo.length; i++) {
    if (this.distTo[i] < min && this.distTo[i] != 0) {
      min = this.distTo[i];
      v = i;
    }
  }
  return v;
}
ShortestPath.prototype.visit = function (v) {
  var edges = this.sort(this.g.adj[v]);
  for (var i = 0; i < edges.length; i++) {
    this.relax(edges[i]);
  }
  var v = this.findClosest();
  if (v == this.lastV) return;
  this.lastV = v;
  this.visit(v);
}
ShortestPath.prototype.relax = function (edge) {
  if (!this.distTo[edge.w] || this.distTo[edge.w] > this.distTo[edge.v] + edge.weight) {
    debugger;
    this.distTo[edge.w] = this.distTo[edge.v] + edge.weight;
    this.edgeTo[edge.w] = edge;
  }
}
ShortestPath.prototype.sort = function (edges) {
  return edges.sort(function (a, b) {
    return a.weight > b.weight;
  });
}
ShortestPath.prototype.pathTo = function (v) {
  var path = [v];
  var p;
  while (this.edgeTo[v]) {
    p = this.edgeTo[v];
    v = p.v;
    path.push(v);
  }
  return path.reverse();
}

var g = new Graph(4);
g.addEdge(0,1,24);
g.addEdge(0,3,20);
g.addEdge(2,0,3);
g.addEdge(3,2,12);
var dj = new ShortestPath(g, 0);
