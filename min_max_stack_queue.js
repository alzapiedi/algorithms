class Stack {
  constructor() {
    this.stack = []; // [val, min. max]
    this.size = 0;
  }
  empty() {
    return this.size == 0;
  }
  peek() {
    if (this.empty()) return null;
    return this.stack[this.size-1];
  }
  push(x) {
    let min = this.min() || x, max = this.max() || x;
    if (x < min) min = x;
    if (x > max) max = x;
    this.stack.push([x, min, max]);
    this.size += 1;
  }
  pop() {
    this.size -= 1;
    return this.stack.pop()[0];
  }
  min() {
    if (this.empty()) return null;
    return this.peek()[1];
  }
  max() {
    if (this.empty()) return null;
    return this.peek()[2];
  }
}

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }
  enqueue(x) {
    this.in.push(x);
  }
  dequeue() {
    if (!this.out.empty()) {
      return this.out.pop();
    } else {
      let size = this.in.size;
      for (let i = 0; i < size - 1; i++) {
        this.out.push(this.in.pop());
      }
      return this.in.pop();
    }
  }
  min() {
    return Math.min(this.in.min(), this.out.min());
  }
  max() {
    return Math.max(this.in.max(), this.out.max());
  }
}
