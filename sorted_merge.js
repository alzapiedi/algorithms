function sortedMerge(arrA, arrB) {
  var idxA = arrA.length - arrB.length - 1;
  var idxB = arrB.length - 1;
  var idx = arrA.length -1;
  while (idx >= 0) {
    var left = arrA[idxA];
    var right = arrB[idxB];
    if (idxA >= 0 && left > right) {
      arrA[idx] = left;
      idxA--;
    } else {
      arrA[idx] = right;
      idxB--;
    }
    idx--;
  }
}
