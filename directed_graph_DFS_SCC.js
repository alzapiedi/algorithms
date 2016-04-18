var Digraph = function (v) {
  this.v = v;
  this.adj = [];
  for (var i = 0; i < v; i++) this.adj.push([]);
}

Digraph.prototype.addEdge = function (v, w) {
  this.adj[v].push(w);
}

Digraph.prototype.reverse = function () {
  var reversed = new Digraph(this.v);
  for (var i = 0; i < this.v; i++) {
    for (var j = 0; j < this.adj[i].length; j++) {
      reversed.addEdge(this.adj[i][j], i);
    }
  }
  return reversed;
}

// Depth First Search

var DFS = function (digraph) {
  this.g = digraph;
  this.marked = [];
  this.id = [];
  this.postorder = [];
  this.count = 0;
  for (var i = 0; i < this.g.v; i++) {
    if (!this.marked[i]) {
      this.dfs(i);
    }
  }
}

DFS.prototype.dfs = function (i) {
  this.marked[i] = true;
  this.id[i] = this.count;
  this.g.adj[i].forEach(function(j) {
    if (!this.marked[j]) {
      this.dfs(j);
    }
  }.bind(this));
  this.postorder.push(i);
}

// Strongly Connected Components

var SCC = function (digraph) {
  this.g = digraph;
  this.marked = [];
  this.id = [];
  this.count = 0;
  var reverse = this.g.reverse();
  var dfs = new DFS(reverse);
  var postorder = dfs.postorder;
  for (var i = 0; i < postorder.length; i++) {
    if (!this.marked[postorder[i]]) {
      this.dfs(postorder[i]);
      this.count += 1;
    }
  }
}

SCC.prototype.dfs = function (i) {
  this.marked[i] = true;
  this.id[i] = this.count;
  for (var i = 0; i < this.g.adj.length; i++) {
    if (!this.marked[this.g.adj[i]]) this.dfs(this.g.adj[i]);
  }
}

SCC.prototype.connected = function (i, j) {
  return this.id[i] == this.id[j];
}
