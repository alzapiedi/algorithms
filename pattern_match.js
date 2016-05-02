// doesnt work :(

function match(value, pattern, patterns) {
  var p = pattern[0];
  var b = '';
  for (var i = 0; i < pattern.length; i++) {
    b += patterns.get(pattern[i]);
  }
  if (b === value) return true;
  if (patterns.get(p) && !startsWith(value, patterns.get(p))) return false;
  while (patterns.get(p) && startsWith(value, patterns.get(p))) {
    value = value.slice(patterns.get(p).length);
    pattern = pattern.slice(1);
    p = pattern[0];
  }
  var newPattern = pattern.slice(1);
  for (var i = 0; i < value.length; i++) {
    patterns.set(p, value.slice(0, i+1));
    if (match(value.slice(i+1), newPattern, patterns)) return true;
  }
  return false;
}

function startsWith(value, test) {
  for (var i = 0; i < test.length; i++) {
    if (value[i] !== test[i]) return false;
  }
  return true;
}
