var Grid = function(n) {
  this.n = n;
  this.grid = [];
  var row, rand, tile;
  for (var i = 0; i < n; i++) {
    row = [];
    for (var j = 0; j < n; j++) {
      rand = Math.random();
      tile = rand > 0.8 ? "X" : "O";
      row.push(tile);
    }
    this.grid.push(row);
  }
}

Grid.prototype.inbounds = function (pos) {
  return pos[0] >= 0 && pos[0] < this.n && pos[1] >= 0 && pos[1] < this.n;
}
Grid.prototype.offLimits = function (pos) {
  if (!this.inbounds(pos)) return true;
  return this.grid[pos[0]][pos[1]] == "X";
}
Grid.prototype.print = function () {
  for (var i = 0; i < this.n; i++) {
    console.log(this.grid[i]);
  }
}

var PathFinder = function (grid) {
  this.grid = grid;
  this.start = [0, 0];
  this.path = [];
  this.completed = false;
}

PathFinder.prototype.down = function (pos) {
  return [pos[0]+1, pos[1]];
}

PathFinder.prototype.right = function (pos) {
  return [pos[0], pos[1] + 1];
}

PathFinder.prototype.findPath = function (start, path) {
  path.push(start);
  if (start[0] == this.grid.n - 1 && start[1] == this.grid.n - 1) {
    this.completed = true;
    return path;
  }
  var d = this.down(start);
  var r = this.right(start);
  if (!this.grid.offLimits(d) && !this.completed) path = this.findPath(d, path);
  if (!this.grid.offLimits(r) && !this.completed) path = this.findPath(r, path);
  return path;
}


Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;
  function curried (arg) {
    if (args.length == numArgs) {
      return fn.apply(null, args);
    } else {
      args.push(arg);
      return curried;
    }
  }
  return curried;
}

function subsets(array) {
  if (array.length == 0) { return [[]]; }
  var subs = subsets(array.slice(1, array.length));
  var newSubs = subs.map(function (sub) {
    return sub.concat(array[0]);
  });
  return subs.concat(newSubs);
}



// The Masseuse CTCI 17.16
function massageTimes(input) {
  if (input.length == 0) return 0;
  if (input.length == 1) return input[0];
  if (input.length == 2) return Math.max(input[0], input[1]);
  var x = input[0] + massageTimes(input.slice(2));
  var y = input[1] + massageTimes(input.slice(3));
  return Math.max(x, y);
}

// Missing Two CTCI 17.19
function missingOne(list) {
  var n = list.length + 1;
  var targetSum = (n * (n+1)) / 2;
  var sum = 0;
  for (var i = 0; i < list.length; i++) sum += list[i];
  return targetSum - sum;
}

// Baby Names CTCI 17.7
var Node = function (name, frequency) {
  this.name = name;
  this.freq = frequency;
}
var NameGraph = function () {
  this.v = [];
  this.adj = [];
}
NameGraph.prototype.addName = function (name, frequency) {
  var newVertex = new Node(name, frequency);
  this.v.push(newVertex);
  this.adj.push([]);
}
NameGraph.prototype.addConnection = function (i, j) {
  this.adj[i].push(j);
  this.adj[j].push(i);
}


var DFS = function (graph) {
  this.g = graph;
  this.marked = [];
  this.id = [];
  this.count = 0;
  for (var i = 0; i < this.g.v.length; i++) {
    if (!this.marked[i]) {
      this.dfs(i);
      this.count += 1;
    }
  }
}
DFS.prototype.dfs = function (i) {
  this.marked[i] = true;
  this.id[i] = this.count;
  this.g.adj[i].forEach(function(j) {
    if (!this.marked[j]) this.dfs(j);
  }.bind(this));
}

DFS.prototype.frequencies = function () {
  var name = this.g.v[0].name;
  var freq = this.g.v[0].freq;
  var freqs = [];
  for (var i = 1; i < this.g.v.length; i++) {
    if (this.id[i] == this.id[i-1]) {
      freq += this.g.v[i].freq;
    } else {
      freqs.push([name, freq]);
      name = this.g.v[i].name;
      freq = this.g.v[i].freq;
    }
  }
  freqs.push([name, freq]);
  return freqs;
}


n = new NameGraph();
n.addName("John", 15);
n.addName("Jon", 12);
n.addName("Johnny", 11);
n.addName("Kris", 12);
n.addName("Christopher", 9);
n.addName("Chris", 16);
n.addConnection(0,1);
n.addConnection(1,2);
n.addConnection(3,4);
n.addConnection(5,3);
g = new DFS(n);
g.frequencies();
