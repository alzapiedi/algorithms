var Node = function (key, value, left, right) {
  this.key = key;
  this.value = value;
  this.left = left;
  this.right = right;
}

var Bst = function (root) {
  this.root = root;
}

Bst.prototype.put = function (key, value) {
  this.insert(this.root, key, value);
}

Bst.prototype.rank = function (key, node) {
  if (arguments.length == 1) { node = this.root; }
  if (!node) { return 0; }
  if (key < node.key) { return this.rank(key, node.left); }
  else if (key > node.key) {
    return 1 + this.size(node.left) + this.rank(key, node.right);
  }
  else { return this.size(node.left); }
}

Bst.prototype.range = function (lo, hi) {
  if (this.get(hi)) { return this.rank(hi) - this.rank(lo) + 1; }
  else { return this.rank(hi) - this.rank(lo); }
}

Bst.prototype.insert = function (node, key, value) {
  if (!node) { return new Node(key, value); }
  var r = node;
  if (r.key < key) {
    r.right = this.insert(r.right, key, value);
  } else if (r.key > key) {
    r.left = this.insert(r.left, key, value);
  } else {
    r.value = value;
  }
  return r;
}

Bst.prototype.get = function (key) {
  node = this.root;
  while (node != null) {
    if (node.key == key) { return node.value; }
    else { node = node.key > key ? node.left : node.right }
  }
  return null;
}

Bst.prototype.inorder = function (node) {
  if (arguments.length == 0) node = this.root;
  if (!node) { return; }
  this.inorder(node.left);
  console.log(node.key);
  this.inorder(node.right);
}

Bst.prototype.size = function (node) {
  if (arguments.length == 0) { node = this.root; }
  if (!node) { return 0; }
  return 1 + this.size(node.left) + this.size(node.right);
}

Bst.prototype.min = function (node) {
  if (arguments.length == 0) { node = this.root; }
  if (!node.left) { return node; }
  return this.min(node.left);
}

Bst.prototype.delMin = function (node) {
  if (arguments.length == 0) { node = this.root; }
  if (!node.left) { return node.right; }
  node.left = this.delMin(node.left);
  return node;
}

Bst.prototype.delMax = function (node) {
  if (arguments.length == 0) { node = this.root; }
  if (!node.right) { return node.left; }
  node.right = this.delMax(node.right);
  return node;
}

Bst.prototype.delete = function (key, node) {
  if (arguments.length == 1) { node = this.root; }
  if (key > node.key) {
    node.right = this.delete(key, node.right);
  } else if (key < node.key) {
    node.left = this.delete(key, node.left);
  } else {
    if (!node.right) { return node.left; }
    var min = this.min(node.right);
    min.right = this.delMin(node.right);
    min.left = node.left;
  }
  return node;
}

Bst.prototype.kthLargest = function (k, node, count) {
  if (!node || count >= k) { return count; }
  count = this.kthLargest(k, node.right, count);
  count += 1;
  if (k == count) {
    console.log(node.value);
    return;
  }
  count = this.kthLargest(k, node.left, count);
  return count;
}


var r = new Node(7, 7);
var bst = new Bst(r);
bst.put(4,4);
bst.put(9,9);
bst.put(3,3);
bst.put(8,8);
bst.put(1,1);
bst.put(5,5);
bst.put(2,2);
bst.inorder();  // 1,2,3,4,5,7,8,9
