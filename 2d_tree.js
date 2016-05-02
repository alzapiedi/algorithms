class TreeNode {
  constructor(values, comparator) {
    this.values = values; // [SAT, gpa]
    this.comparator = comparator;
  }
}

class Tree {
  constructor(values) {
    this.root = new TreeNode(values, 0);
  }
  insert(node, values, comp) {
    if (!node) return new TreeNode(values, comp);
    var r = node;
    var c = node.comparator;
    var o = c === 0 ? 1 : 0;
    if (values[c] > node.values[c]) {
      if (o === 1 && values[o] > node.values[o]) {
        r.values = values;
      } else {
        r.right = this.insert(r.right, values, o);
      }
    } else {
      r.left = this.insert(r.left, values, o);
    }
    return r;
  }
  put (values) {
    this.insert(this.root, values, this.root.comparator);
  }
}

class TreeSearch {
  constructor(t) {
    this.t = t;
    this.set = [];
    this.n = 0;
    this.buildSequence(t.root, []);
    this.findBest(t.root);
  }
  buildSequence(node, set) {
    if (!node) return 0;
    var c = node.comparator;
    var l = set.length - 1;
    if (!set.length || node.values[1] < set[l][1]) {
      set.push(node.values);
      if (c === 0) {
        this.buildSequence(node.right, set);
      } else {
        this.buildSequence(node.left, set);
      }
    }
    if (set.length > this.set.length) {
      this.set = set;
    }
  }
  findBest(node) {
    if (!node) return;
    this.buildSequence(node.left, []);
    this.buildSequence(node.right, []);
  }
}

function longestMonotonicSubsequence(data) {  // [[SAT1, gpa1], [SAT2, gpa2], ...]
  data.sort(function (a, b) { return a[0] > b[0] });
  var tree = new Tree(data[0]);
  for (var i = 1; i < data.length; i++) {
    tree.put(data[i]);
  }
  var search = new TreeSearch(tree);
  return search.set;
}

var scores = [[1000,2.8],[800,2.6],[1400,3.0],[850,2.7],[880,3.6],[1100,3.2],[1200,3.1],[900,3.4],[1300,3.6]];
longestMonotonicSubsequence(scores);
