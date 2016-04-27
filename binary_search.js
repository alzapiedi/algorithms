function bSearch(arr, value) {
  if (!arr.length || arr.length == 1 && arr[0] != value) return null;
  let mid = Math.floor(arr.length / 2);
  let pivot = arr[mid];
  if (pivot === value) return mid;
  if (pivot > value) return bSearch(arr.slice(0, mid), value);
  if (pivot < value) {
    let i = bSearch(arr.slice(mid), value);
    return i ? i + mid : null;
  }
}
