function subsets(arr) {
  if (!arr.length) return [[]];
  var n = arr[0];
  var prevSubs = subsets(arr.slice(1));
  var newSubs = prevSubs.map(function (el) {
    return [n].concat(el);
  });
  return prevSubs.concat(newSubs);
}
