class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function recReverse(node, next) {
  if (!next) return;
  var n = next.next;
  next.next = node;
  recReverse(next, n);
}

function reverse(node) {
  recReverse(node, node.next);
  node.next = null;
}

let a = new LinkedListNode("A");
let b = new LinkedListNode("B");
let c = new LinkedListNode("C");
let d = new LinkedListNode("D");
let e = new LinkedListNode("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

reverse(a);

e.next == d &&
d.next == c &&
c.next == b &&
b.next == a &&
a.next == null;
