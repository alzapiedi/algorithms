function hash(word) {
  var h = 0
  for (var i = 0; i < word.length; i++) {
    h = h * 31 + word.charCodeAt(i);
  }
  return h
}

var Node = function (key, value) {
  this.key = key;
  this.value = value;
}

var HashTable = function() {
  this.bin = [[],[],[],[],[]];
  this.size = 0;
}

HashTable.prototype.get = function (key, bool = true) {
  var h = hash(key) % this.bin.length;
  var node;
  for (var i = 0; i < this.bin[h].length; i++) {
    node = this.bin[h][i];
    if (node.key == key) return bool ? node.value : node;
  }
  return null;
}

HashTable.prototype.set = function (key, value) {
  var node = this.get(key, false);
  if (node) {
    node.value = value;
    return;
  }
  var h = hash(key) % this.bin.length;
  node = new Node(key, value);
  this.bin[h].push(node);
  this.size += 1;
  if (this.size == this.bin.length) this.resize();
}

HashTable.prototype.resize = function () {
  var newBin = [];
  var h, node;
  for (var i = 0; i < this.size*2; i++) newBin.push([]);
  for (var b = 0; b < this.bin.length; b++) {
    for (var k = 0; k < this.bin[b].length; k++) {
      node = this.bin[b][k];
      h = hash(node.key) % newBin.length;
      newBin[h].push(node);
    }
  }
  this.bin = newBin;
}
