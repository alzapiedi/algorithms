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

class SecondLargest {
  constructor(root) {
    this.second = this.sec(root);
  }
  sec(node) {
    let current = node;
    while (current) {
      // case 1 : node has a right with no children -> node is 2nd largest
      if (current.right && !current.right.right && !current.right.left) {
        return current.value;
      }
      // case 2 : node has no right but a left -> node is largest in left tree
      else if (!current.right && current.left) {
        return this.rightMostNode(current.left);
      }

      // continue until one case is true;
      current = current.right;
    }
  }
  rightMostNode(root) {
    while (root.right) {
      root = root.right
    }
    return root.value;
  }
}

// Alternate
function sec(root) {
  var node = root;
  var last = node;
  while (node.right) {
    last = node;
    node = node.right;
  }
  if (node.left) return maximum(node.left);
  return last.value;
}

function maximum(root) {
  var node = root;
  while(node.right) {
    node = node.right;
  }
  return node.value;
}


a = new BinaryTreeNode(71);
b = a.insertLeft(52);
c = a.insertRight(93);
d = b.insertLeft(34);
e = b.insertRight(61);
f = c.insertLeft(88);
g = c.insertRight(102);
h = d.insertLeft(22);
i = d.insertRight(42);
k = g.insertLeft(97);

t = new SecondLargest(a);
console.log(t.second);
