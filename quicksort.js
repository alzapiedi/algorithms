var partition = function (array, lo, hi) {
  var i = lo + 1, j = hi, temp;
  while (true) {
    while (array[i] < array[lo]) {
      i += 1;
      if (i == hi) { break; }
    }
    while (array[j] > array[lo]) {
      j -= 1;
      if (j == lo) { break; }
    }
    if (i >= j) { break; }
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  temp = array[lo];
  array[lo] = array[j];
  array[j] = temp;
  return j;
}


var quickSort = function (array, lo, hi) {
  if (arguments.length == 1) { lo = 0, hi = array.length-1; }
  if (lo >= hi) { return; }
  var j = partition(array, lo, hi);
  quickSort(array, lo, j-1);
  quickSort(array, j+1, hi);
  return array;
}
var arr = [5,7,3,6,9,1,8,2,4,13,11,14];
