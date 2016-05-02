function parenthesis(str, idx) {
  if (str[idx] !== "(") throw new Error("Starting index not (");
  var par = 0;
  for (var i = idx + 1; i < str.length; i++) {
    if (str[i] === ")") {
      if (par === 0) return i;
      par--;
    } else if (str[i] === "(") {
      par++;
    }
  }
  throw new Error("No ending parenthesis");
}



function isOpener(x) {
  return x === "(" || x === "{" || x === "[";
}
function isCloser(x) {
  return x === ")" || x === "}" || x === "]";
}
function other(first) {
  switch (first) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
  }
}

function brackets(str) {
  var stack = [], peek, b;
  for (var i = 0; i < str.length; i++) {
    b = str[i];
    peek = stack[stack.length - 1];
    if (isCloser(b))  {
      if (b !== other(peek)) return false;
      stack.pop();
    }
    if (isOpener(b)) stack.push(b);

  }
  return stack.length === 0;
}
