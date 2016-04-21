class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

class ValidBST {
  constructor(root) {
    this.valid = this.validate(root, -1/0, 1/0);
  }
  validate(node, min, max) {
    if (!node) return true;
    if (node.value > max || node.value < min) return false;
    return this.validate(node.left, min, node.value) && this.validate(node.right, node.value, max);
  }
}
a = new BinaryTreeNode(7);
b = a.insertLeft(5);
c = a.insertRight(9);
d = b.insertLeft(3);
e = b.insertRight(6);
f = c.insertLeft(8);
g = c.insertRight(10);
h = d.insertLeft(2);
i = d.insertRight(4);
// j = e.insertRight(11); // Add to invalidate
t = new ValidBST(a);
console.log(t.valid);
