function permutations(arr) {
  if (arr.length === 0) return [[]];
  var perms = [];
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i];
    var rest = arr.slice(0, i).concat(arr.slice(i+1));
    var newPerms = permutations(rest).map(function (perm) {
      perm.push(first);
      return perm;
    });
    perms = perms.concat(newPerms);
  }
  return perms;
}
