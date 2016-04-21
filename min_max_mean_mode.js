class Stats {
  constructor() {
    this.min = 1/0;
    this.max = -1/0;
    this.counts = new Map();
    this.n = 0;
    this.sum = 0;
    this.mean = 0;
    this.mode = [null, 0];
  }
  insert(t) {
    this.sum += t;
    this.n += 1;
    this.min = Math.min(this.min, t);
    this.max = Math.max(this.max, t);
    this.mean = this.sum / this.n;
    if (this.counts.get(t) > 0) {
      this.counts.set(t, this.counts.get(t) + 1);
    } else { this.counts.set(t, 1) }
    if (this.counts.get(t) > this.mode[1]) {
      this.mode = [t, this.counts.get(t)];
    }
  }
  getMin() {
    return this.min;
  }
  getMax() {
    return this.max;
  }
  getMean() {
    return this.mean;
  }
  getMode() {
    return this.mode[0];
  }
}
var s = new Stats();
s.insert(1);
s.insert(2);
s.insert(3);
s.insert(3);
console.log("Mean: " + s.getMean() + " - expected: 2.25");
console.log("Mode: " + s.getMode() + " - expected: 3");
s.insert(4);
s.insert(4);
s.insert(4);
console.log("Mean: " + s.getMean() + " - expected: 3");
console.log("Mode: " + s.getMode() + " - expected: 4");
