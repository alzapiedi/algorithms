function riffleShuffle(arr) {
  var half1 = arr.slice(0,26).reverse();
  var half2 = arr.slice(26).reverse();
  var shuffledDeck = [];
  while (shuffledDeck.length < 52) {
    var r1 = Math.ceil(Math.random() * 3);
    var r2 = Math.ceil(Math.random() * 3);
    for (var i = 0; i < r1; i++) {
      if (half1.length > 0) shuffledDeck.push(half1.pop());
    }
    for (var j = 0; j < r2; j++) {
      if (half2.length > 0) shuffledDeck.push(half2.pop());
    }
  }
  return shuffledDeck;
}

function isRiffled(arr, h1, h2) {
  for (var i = 0; i < 52; i++) {
    var last = arr[arr.length - 1];
    var last1 = h1[h1.length - 1];
    var last2 = h2[h2.length - 1];
    if ()
  }
}
