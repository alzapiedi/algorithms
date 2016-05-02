function isLeaf(arr, i) {
  return 2*i+1 >= arr.length;
}

function greater(arr, i, j) {
  if (!arr[i]) return j;
  if (!arr[j]) return i;
  return arr[i] > arr[j] ? i : j;
}

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function sink(arr, i) {
  while(!isLeaf(arr, i)) {
    var j = greater(arr, i*2+1, i*2+2);
    if (arr[i] < arr[j]) swap(arr, i, j);
    i = j;
  }
}

function heapSort(arr) {
  if (arr.length < 2) return arr;
  // construct a heap in place
  for (var i = arr.length - 1; i >= 0; i--) {
    if (!isLeaf(arr, i)) sink(arr, i);
  }
  // loop swap max with last spot and then sink
  var last = arr.length - 1;
  while (last > 0) {
    swap(arr, 0, last);
    sink(arr, 0);
    last--;
  }
  return arr;
}
