var merge = function (left, right) {
  var merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left[0]);
      left = left.slice(1, left.length);
    } else {
      merged.push(right[0]);
      right = right.slice(1, right.length);
    }
  }
  return merged.concat(left).concat(right);
}

var mergeSort = function (array) {
  if (array.length <= 1) { return array; }
  var midpoint = Math.floor(array.length/2);
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint, array.length);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}
