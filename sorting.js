function sort(arr, max) {
  var counts = [];
  var sorted = [];
  arr.forEach(function (x) {
    if (counts[x]) counts[x] += 1;
    else counts[x] = 1;
  });
  counts.forEach(function (x, i) {
    for (var c = 0; c < x; c++) sorted.push(i);
  });
  return sorted;
}
