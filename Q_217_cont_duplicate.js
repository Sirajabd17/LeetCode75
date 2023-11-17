//217 finding duplicate number in array
//1st approach

let num = [3, 4, 9, 1, 7, 8, 6];

var containsDuplicate = function (num) {
  const map = new Map();
  for (const n of num) {
    if (map.has(n)) return true;
    map.set(n, true);
  }
  return false;
};
console.log(containsDuplicate(num));

//2nd approach

function duplicate(num) {
  const set = new Set(num);
  return set.size !== num.length;
}
console.log(duplicate(num));
