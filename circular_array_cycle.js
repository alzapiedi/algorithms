function isCycle(arr) {
  var current = 0;
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    current = (current + arr[i]) % l;
    if (current < 0) current += l;
    if (current === 0 && i < l - 1) return false;
  }
  return current === 0;
}
