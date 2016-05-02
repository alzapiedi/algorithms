var swap = function (arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

var partition = function (array, lo, hi) {
  var i = lo + 1, j = hi, temp;
  while (i <= hi && j >= lo) {
    while (array[i] < array[lo]) i++;
    while (array[j] > array[lo]) j--;
    if (i >= j) { break; }
    swap(arr, i, j);
  }
  swap(arr, lo, j);
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
