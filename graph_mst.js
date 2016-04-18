var UF = function (v) {
  this.id = [];
  for (var i = 0; i < v; i++) this.id.push(i);
}
UF.prototype.connect = function (v, w) {
  for (var i = 0; i < this.id.length; i++) {
    if (this.id[i] == this.id[v]) this.id[i] = this.id[w];
  }
}
UF.prototype.connected = function (v, w) {
  return this.id[v] == this.id[w];
}
var MinPQ = function () {
  this.heap = [null];
  this.size = 0;
}

MinPQ.prototype.insert = function (edge) {
  this.heap.push(edge);
  this.size += 1;
  this.swim(this.size);
}

MinPQ.prototype.delMin = function () {
  this.exchange(1, this.size);
  var min = this.heap.pop();
  this.size -= 1;
  this.sink(1);
  return min;
}

MinPQ.prototype.swim = function (i) {
  while (i > 1 && this.heap[Math.floor(i/2)].weight > this.heap[i].weight) {
    this.exchange(i, Math.floor(i/2));
    i = Math.floor(i/2);
  }
}

MinPQ.prototype.sink = function (i) {
  var j, less;
  while (2*i <= this.size) {
    j = this.lesser(2*i, 2*i + 1);
    if (this.heap[i].weight > this.heap[j].weight) {
      this.exchange(i, j);
    }
    i = j;
  }
}
MinPQ.prototype.lesser = function (i, j) {
  if (!this.heap[i]) return j;
  if (!this.heap[j]) return i;
  return this.heap[i].weight < this.heap[j].weight ? i : j;
}
MinPQ.prototype.empty = function () {
  return this.size == 0;
}

MinPQ.prototype.exchange = function (i, j) {
  var temp = this.heap[i];
  this.heap[i] = this.heap[j];
  this.heap[j] = temp;
}

var Edge = function (v, w, ww) {
  this.v = v;
  this.w = w;
  this.weight = ww;
}
Edge.prototype.other = function (v) {
  if (v == this.v) return this.w;
  else return this.v;
}
var Graph = function (v) {
  this.v = v;
  this.adj = [];
  this.edges = [];
  for (var i = 0; i < v; i++) this.adj.push([]);
}
Graph.prototype.addEdge = function (v, w, ww) {
  var edge = new Edge(v, w, ww);
  this.edges.push(edge);
  this.adj[v].push(edge);
  this.adj[w].push(edge);
}

var KruskalMST = function (graph) {
  this.weight = 0;
  this.mst = [];
  var pq = new MinPQ();
  var uf = new UF(graph.v);
  var edge;
  for (var i = 0; i < graph.edges.length; i++) pq.insert(graph.edges[i]);
  while (!pq.empty() && this.mst.length < graph.v - 1) {
    edge = pq.delMin();
    if (!uf.connected(edge.w, edge.v)) {
      uf.connect(edge.w, edge.v);
      this.mst.push(edge);
      this.weight += edge.weight;
    }
  }
}

var PrimMST = function (graph) {
  this.graph = graph;
  this.weight = 0;
  this.mst = [];
  this.visited = [];
  this.pq = new MinPQ();
  var egde;
  this.visit(0);
  while (!this.pq.empty()) {
    edge = this.pq.delMin();
    if (this.visited[edge.v] && this.visited[edge.w]) continue;
    this.mst.push(edge);
    this.weight += edge.weight;
    if (!this.visited[edge.v]) this.visit(edge.v);
    if (!this.visited[edge.w]) this.visit(edge.w);
  }
}
PrimMST.prototype.visit = function (i) {
  this.visited[i] = true;
  var edges = this.graph.adj[i];
  for (var j = 0; j < edges.length; j++) {
    if (!this.visited[edges[j].other(i)]) this.pq.insert(edges[j]);
  }
}
var g = new Graph(7);
g.addEdge(0,1,16);
g.addEdge(0,2,12);
g.addEdge(0,3,21);
g.addEdge(1,4,20);
g.addEdge(1,3,17);
g.addEdge(2,3,28);
g.addEdge(2,5,31);
g.addEdge(3,4,18);
g.addEdge(6,5,27);
g.addEdge(6,4,11);
g.addEdge(6,3,23);
g.addEdge(3,5,19);
var k = new KruskalMST(g);
var p = new PrimMST(g);

// Example from project euler #107 - Minimal Network
// k.weight == 93 && p.weight == 93;
