_fibs = [0, 1];
function fibonacci(n) {
  if (_fibs.length > n) {
    return _fibs[n];
  } else {
    while (_fibs.length <= n) {
      let l = _fibs.length - 1;
      _fibs.push(_fibs[l] + _fibs[l-1]);
    }
  }
  return _fibs[n];
}
