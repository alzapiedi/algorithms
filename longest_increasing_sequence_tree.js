class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    var newNode = new Node(value);
    this.children.push(newNode);
    return newNode;
  }
}

class LongestSeq {
  constructor(node) {
    this.root = node;
    this.best = [];
    this.find(node, []);
  }
  find(node,seq) {
    if (!seq.length || node.value > seq[seq.length - 1]) {
      seq.push(node.value);
      if (seq.length > this.best.length) this.best = seq;
    } else {
      seq = [node.value];
    }
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      this.find(child, seq.slice());
    }
  }
  longest() {
    return this.best;
  }
}

a = new Node(3);
b = a.addChild(4);
  e = b.addChild(5);

c = a.addChild(6);
  f = c.addChild(2);
    g = f.addChild(8);
    h = f.addChild(3);
      i = h.addChild(4);
        j = i.addChild(5);
          k = j.addChild(1);

d = a.addChild(9);
  l = d.addChild(7);

long = new LongestSeq(a);
console.log(long.longest());
