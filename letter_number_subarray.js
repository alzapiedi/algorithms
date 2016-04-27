function subarray(arr) {
  var letters = 0;
  var numbers = 0;
  var max = 0;
  var start, end;
  var map = new Map();
  map.set(0, -1);
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') numbers++;
    else letters++;
    var d = numbers - letters;
    if (map.get(d)) {
      var size = i - map.get(d);
      if (size > max) {
        max = size;
        start = map.get(d);
        end = i;
      }
    } else {
      map.set(d, i);
    }
  }
  return arr.slice(start+1, end+1);
}
