var MaxPQ = function () {
  this.heap = [null];
  this.size = 0;
}

MaxPQ.prototype.insert = function (value) {
  this.heap.push(value);
  this.size += 1;
  this.swim(this.size);
}

MaxPQ.prototype.delMax = function () {
  this.exchange(1, this.size);
  var max = this.heap.pop();
  this.size -= 1;
  this.sink(1);
  return max;
}

MaxPQ.prototype.swim = function (i) {
  while (i > 1 && this.heap[Math.floor(i/2)] < this.heap[i]) {
    this.exchange(i, Math.floor(i/2));
    i = Math.floor(i/2);
  }
}

MaxPQ.prototype.sink = function (i) {
  var j, less;
  while (2*i < this.size) {
    j = this.heap[2*i] > this.heap[2*i + 1] ? 2*i : 2*i + 1;
    if (this.heap[i] < this.heap[j]) {
      this.exchange(i, j);
    }
    i = j;
  }
}

MaxPQ.prototype.exchange = function (i, j) {
  var temp = this.heap[i];
  this.heap[i] = this.heap[j];
  this.heap[j] = temp;
}

var pq = new MaxPQ();
pq.insert(5);
pq.insert(2);
pq.insert(6);
pq.insert(1);
pq.insert(3);
pq.insert(9);
pq.insert(7);
pq.insert(8);
for (var i = 0; i < 8; i++) {
  console.log(pq.delMax());
}
