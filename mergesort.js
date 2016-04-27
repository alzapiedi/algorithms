function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

function merge(left, right) {
  var merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left[0]);
      left.shift();
    } else {
      merged.push(right[0]);
      right.shift();
    }
  }
  return merged.concat(left).concat(right);
}
