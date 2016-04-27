function permpal(str) {
  var c = new Set();
  for (var i = 0; i < str.length; i++) {
    var l = str[i];
    if (c.has(l)) c.delete(l);
    else(c.add(l));
  }
  return c.size < 2;
}
