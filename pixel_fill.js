function neighbors(r, c, max) {
  var n = [];
  var d = [[r, c+1], [r, c-1], [r+1, c], [r-1, c], [r+1, c+1], [r+1, c-1],[r-1,c+1],[r-1,c-1]];
  d.forEach(function (delta) {
    var x = delta[0];
    var y = delta[1];
    if (x >= 0 && y >= 0 && x < max && y < max) n.push(delta);
  });
  return n;
}

function fill(arr, r, c, color) {
  var n = neighbors(r, c, arr.length);
  var old = arr[r][c];
  arr[r][c] = color;
  n.forEach(function (pos) {
    if (arr[pos[0]][pos[1]] === old) fill(arr, pos[0], pos[1], color);
  });
  return arr;
}

var scr = [[1,1,1,1,1], [1,1,0,0,0],[2,2,0,0,2],[2,2,0,2,2],[1,1,1,1,1]];

fill(scr, 2, 2, 4);
