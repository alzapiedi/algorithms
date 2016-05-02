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

function substring(str, i, j) {
  var res = '';
  while (i <= j) res += str[i++];
  return res;
}

function substringPermutations(string) {
  var subs = [];
  var perms = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      subs.push(substring(string,i,j));
    }
  }
  subs.forEach(function (str) {
    var a = str.split('');
    var p = permutations(a);
    p.map(function (perm) {
      perm.join('');
      return perm;
    });
    perms = perms.concat(p);
  });
  return perms;
}
