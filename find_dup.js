function findDup(arr) {
  var head = arr.length - 1;
  var slow = head;
  var fast = head;
  var cycleLength = 1;
  var secondMeet = false;
  while (true) {
    if (secondMeet) cycleLength++;
    if (slow === fast && !secondMeet) secondMeet = true;
    slow = arr[slow - 1];
    fast = arr[arr[fast - 1] - 1];
    if (slow === fast && secondMeet) break;
  }
  slow = head;
  fast = head;
  for (var i = 0; i < cycleLength; i++) {
    fast = arr[fast - 1];
  }
  while (slow !== fast) {
    last = slow;
    slow = arr[slow - 1];
    fast = arr[fast - 1];
  }
  return arr[last - 1];
}
