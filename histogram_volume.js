function volume(h) {
  var max = 0;
  var maxAt = [];
  var area = 0;
  for (var i = h.length - 1; i >= 0; i--) {
    maxAt[i] = max;
    if (h[i] > max) max = h[i];
  }
  for (var j = 0; j < h.length; j++) {
    if (h[j] === 0) continue;
    if (area > 0 && h[j] < maxAt[j-1]) continue;
    var m = Math.min(h[j], maxAt[j]);
    var o = 0;
    var k = j+1;
    while (maxAt[k] === maxAt[j]) {
      if (h[k] !== 0) o += h[k];
      k++;
    }
    var w = k - j - 1;
    area += ((m * w) - o);
  }
  return area;
}
