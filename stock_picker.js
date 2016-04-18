var stockPicker = function (prices) {
  var min = Math.min(prices[0], prices[1]);
  var max = Math.max(prices[0], prices[1]);
  var best = prices[1] - prices[0];
  var current;
  for (var i = 2; i < prices.length; i++) {
    current = prices[i];
    dif = current - min;
    if (dif > best) best = dif;
    if (current < min) min = current;
    if (current > max) max = current;
  }
  return best;
}
