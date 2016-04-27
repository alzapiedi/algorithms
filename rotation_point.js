var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // rotation point
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

function rotationPoint(words) {
  let mid = Math.floor(words.length / 2);
  if (words[mid] < words[mid-1]) return mid;
  else if (words[mid] > words[words.length - 1]) return mid + rotationPoint(words.slice(mid));
  else if (words[mid] < words[words.length - 1]) return rotationPoint(words.slice(0, mid));
}

let i = rotationPoint(words);
console.log(words[i]);
