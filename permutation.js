function permutations (arr) {
  if (arr.length == 0) return [[]];
  var perms = [];
  var first, rest, newPerms;
  for (var i = 0; i < arr.length; i++) {
    first = arr[i];
    rest = arr.slice(0, i).concat(arr.slice(i+1));
    newPerms = permutations(rest).map(function(permutation) {
      permutation.push(first);
      return permutation;
    });
    perms = perms.concat(newPerms);
  }
  return perms;
}
