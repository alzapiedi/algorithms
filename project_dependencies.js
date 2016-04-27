// Topological sort using DFS reverse postorder.

class Graph {
  constructor(n) {
    this.n = n;
    this.adj = [];
    for (var i = 0; i < n; i++) this.adj.push([]);
  }
  addEdge(v, w) {
    this.adj[w].push(v);
  }
}
class GraphDFS {
  constructor(g) {
    this.g = g;
    this.order = [];
    this.marked = [];
    for (var i = 0; i < this.g.n; i++) {
      if (!this.marked[i]) this.visit(i);
    }
  }
  visit(v) {
    this.marked[v] = true;
    var adj = this.g.adj[v];
    for (var i = 0; i < adj.length; i++) {
      if (!this.marked[adj[i]]) this.visit(adj[i]);
    }
    this.order.push(v);
  }
}

function dependencies(proj, dep) {
  var g = new Graph(proj.length);
  for (var i = 0; i < dep.length; i++) {
    var v = dep[i][0];
    var w = dep[i][1];
    g.addEdge(v, w);
  }
  var dfs = new GraphDFS(g);
  return dfs.order.reverse();
}

var proj = [0,1,2,3,4,5];
var dep = [[3,0], [1,5], [3,1], [0,5], [2,3]];
dependencies(proj, dep);
