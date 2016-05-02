RED = true;
BLACK = false;

class Node {
  constructor(value, color) {
    this.value = value;
    this.red = color;
  }
}

class RedBlack {
  constructor () {};

  insert(value) {
    if (!this.root) this.root = new Node(value, BLACK);
    else this.root = this.put(this.root, value);
  }

  put(node, value) {
    if (!node) return new Node(value, RED);
    if (value > node.value) node.right = this.put(node.right, value);
    else node.left = this.put(node.left, value);
    if (this.isRed(node.right) && !this.isRed(node.left)) node = this.rotateLeft(node);
    if (this.isRed(node.right) && this.isRed(node.left)) this.flipColors(node);
    if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rotateRight(node);
    return node;
  }

  has(value, node) {
    if (!this.root) throw new Error("BST is empty.");
    if (arguments.length === 1) node = this.root;
    if (!node) return false;
    if (node.value === value) return true;
    if (value > node.value) return this.has(value, node.right);
    else return this.has(value, node.left);
  }
  rotateLeft(n1) {
    var n2 = n1.right;
    n1.right = n2.left;
    n2.left = n1;
    n2.red = n1.red;
    n1.red = RED;
    return n2;
  }
  flipColors(node) {
    node.red = true;
    node.left.red = false;
    node.right.red = false;
  }
  rotateRight(n1) {
    n2 = n1.left;
    n1.left = n2.right;
    n2.right = n1;
    n2.red = n1.red;
    n1.red = RED;
    return n2;
  }
  isRed(node) {
    if (!node) return false;
    return node.red;
  }
}
