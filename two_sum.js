// Write a function that takes an integer flightLength (in minutes) and an array of integers
// movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in
// movieLengths whose sum equals flightLength.

function twoSum(flightLength, movieLengths) {
  var complements = new Set();
  for (var i = 0; i < movieLengths.length; i++) {
    if (complements.has(movieLengths[i])) return true;
    complements.add(flightLength-movieLengths[i]);
  }
  return false;
}
