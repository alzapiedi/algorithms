function equals(pos1, pos2) {
  return pos1[0] == pos2[0] && pos1[1] == pos2[1];
}

function inBounds(pos) {
  return pos[0] >= 0 && pos[1] >= 0 && pos[0] < 8 && pos[1] < 8;
}

function includes(x, y) {
  var t = false;
  x.forEach(function (el) {
    if (equals(el, y)) t = true;
  });
  return t;
}

var Board = function (n) {
  this.grid = [];
  this.n = n;
  this.pieces = [];
  var row;
  for (var i = 0; i < n; i++) {
    row = [];
    for (var j = 0; j < n; j++) {
      row.push(null);
    }
    this.grid.push(row);
  }
}
Board.prototype.clone = function () {
  var b = new Board(this.n);
  var p;
  this.pieces.forEach(function (piece) {
    p = new Queen(b, piece.pos);
  });
  return b;
}
Board.prototype.addPiece = function (piece, pos) {
  this.grid[pos[0]][pos[1]] = piece;
  this.pieces.push(piece);
}
Board.prototype.candidateTiles = function () {
  var invalid = [];
  this.pieces.forEach(function (piece) {
    piece.moves().forEach(function (move) {
      invalid.push(move);
    })
    invalid.push(piece.pos);
  });
  var tiles = [];
  for (var r = 0; r < this.n; r++) {
    for (var c = 0; c < this.n; c++) {
      if (!includes(invalid, [r, c])) tiles.push([r,c]);
    }
  }
  return tiles;
}

var Queen = function (board, pos) {
  this.board = board;
  this.pos = pos;
  this.board.addPiece(this, pos);
}
Queen.prototype.moves = function () {
  var m = [];
  var d = 1;
  var r = this.pos[0];
  var c = this.pos[1];
  var pos;
  while (d < 8) {
    pos = [[r + d, c],
              [r - d, c],
              [r + d, c + d],
              [r + d, c - d],
              [r - d, c + d],
              [r - d, c - d],
              [r, c + d], [r, c-d]];
    pos.forEach(function (pos) {
      if (inBounds(pos)) m.push(pos);
    });
    d += 1;
  }
  return m;
}

var Solver = function (board) {
  this.board = board;
}
Solver.prototype.solve = function (n = 8, board = this.board) {
  if (n == 0) return board;
  var tiles = board.candidateTiles();
  if (tiles.length == 0) return false;
  var testBoard, q, s;
  for (var i = 0; i < tiles.length; i++) {
    testBoard = board.clone();
    q = new Queen(testBoard, tiles[i]);
    s = this.solve(n - 1, testBoard);
    if (s) return s;
  }
}

var b = new Board(8);
var s = new Solver(b);
var o = s.solve();
console.log(o.pieces.map(function (piece) { return piece.pos; }));
