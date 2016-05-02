var TrieNode = function (parent, letter) {
  this.letter = letter;
  this.parent = parent;
  this.word = false;
  this.connections = new Map();
}

TrieNode.prototype.get = function (letter) {
  return this.connections.get(letter);
}

TrieNode.prototype.add = function (node) {
  this.connections.set(node.letter, node);
}

TrieNode.prototype.wordsBeneath = function (seen) {
  seen = seen || [];
  if (this.word) seen.push(this.text);
  this.connections.forEach(function (node, letter) {
    seen = node.wordsBeneath(seen);
  });
  return seen;
}

var Trie = function () {
  this.root = new TrieNode();
}

Trie.prototype.addWord = function (word) {
  var node = this.root;
  for (var i = 0; i < word.length; i++) {
    newNode = node.get(word[i]) || new TrieNode(node, word[i]);
    node.add(newNode);
    node = newNode;
  }
  node.word = true;
  node.text = word;
}

Trie.prototype.lookup = function (query) {
  var node = this.root;
  for (var i = 0; i < query.length; i++) {
    node = node.get(query[i]);
    if (!node) return false;
  }
  return node;
}

Trie.prototype.has = function (word) {
  var node = this.lookup(word);
  return !!node;
}

Trie.prototype.wordsWithPrefix = function (prefix) {
  var node = this.lookup(prefix);
  return node.wordsBeneath();
}


var T = new Trie();
var words = ["apple", "apron", "apt", "bat", "barn", "bar", "bend", "bank", "car", "cow"];
words.forEach(function (word) {
  T.addWord(word);
});

T.wordsWithPrefix("ba");

var map = new Map();
map.set(1, ["a", "b", "c"]);
map.set(2, ["d", "e", "f"]);
var dictionary = new Trie();
dictionary.addWord('ad');
dictionary.addWord('be');
dictionary.addWord('de');


function t9(input, words, node, prefix) {
  if (!input.length && node.word) {
    words.push(prefix);
    return;
  }
  var letters = map.get(input[0]);
  for (var i = 0; i < letters.length; i++) {
    var l = letters[i];
    if (node.get(l)) t9(input.slice(1), words, node.get(l), prefix + l);
  }
  return words;
}
