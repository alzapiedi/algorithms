var RED = true;
var BLACK = false;

var Node = function (key, value, color, left, right) {
  this.key = key;
  this.value = value;
  this.left = left;
  this.right = right;
  this.color = color;
}

var Bst = function (root) {
  this.root = root;
}

Bst.prototype.isRed = function (node) {
  if (!node) { return false; }
  return node.color;
}

Bst.prototype.put = function (key, value) {
  this.root = this.insert(this.root, key, value);
}

Bst.prototype.insert = function (node, key, value) {
  if (!node) { return new Node(key, value, RED); }
  var r = node;
  if (r.key < key) {
    r.right = this.insert(r.right, key, value);
  } else if (r.key > key) {
    r.left = this.insert(r.left, key, value);
  } else {
    r.value = value;
  }
  if (this.isRed(r.right) && !this.isRed(r.left)) { r = this.rotateLeft(r); }
  if (this.isRed(r.left) && this.isRed(r.right)) { this.flipColors(r); }
  if (this.isRed(r.left) && this.isRed(r.left.left)) { r = this.rotateRight(r); }
  return r;
}

Bst.prototype.rotateLeft = function (node1) {
  var node2 = node1.right;
  node1.right = node2.left;
  node2.left = node1;
  node2.color = node1.color;
  node1.color = RED;
  return node2;
}

Bst.prototype.rotateRight = function (node1) {
  var node2 = node1.left;
  node1.left = node2.right;
  node2.right = node1;
  node2.color = node1.color;
  node1.color = RED;
  return node2;
}

Bst.prototype.flipColors = function (node) {
  node.left.color = BLACK;
  node.right.color = BLACK;
  node.color = RED;
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
  if (arguments.length == 0) { node = this.root; }
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


var r = new Node(1,1, RED);
var bst = new Bst(r);
bst.put(2,2);
bst.put(3,3);
bst.put(4,4);
bst.put(5,5);
bst.put(6,6);
bst.put(7,7);
bst.put(8,8);
bst.inorder();  // 1,2,3,4,5,7,8,9
