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

class TreeDepths {
  constructor(root) {
    this.root = root;
    this.findDepths();
  }
  superBalanced() {
    let depths = [];
    let stack = [[this.root, 0]];
    while (stack.length) {
      let next = stack.pop(), node = next[0], d = next[1];
      if (node.right) stack.push([node.right, d + 1]);
      if (node.left) stack.push([node.left, d + 1]);
      if (!node.left && !node.right) {
        if (depths.indexOf(d) == -1) {
          depths.push(d);
        }
        if (depths.length > 2 || depths.length == 2 && Math.abs(depths[0] - depths[1] > 1)) return false;
      }
    }
    return true;
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
// j = h.insertLeft(1); // Add to unbalance
t = new TreeDepths(a);
console.log(t.superBalanced());
