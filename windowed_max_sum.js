// Maximum contiguous subsum of array with subarray size k

function maxSum(arr, k) {
  var idx = 0;
  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += arr[i];
  }
  var max = sum;
  for (var j = 1; j < arr.length - k; j++) {
    sum -= arr[j-1];
    sum += arr[j + k - 1];
    if (sum > max) {
      max = sum;
      idx = j;
    }
  }
  return max;
}
