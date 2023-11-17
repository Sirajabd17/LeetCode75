//leetCode75Q1;
//brute force approch
// let arr3 = [1, 2, 6, 8];
// let target = 8;
// function adds(num, target) {
//   for (var i = 0; i < arr3.length; i++) {
//     for (var j = i + 1; j < arr3.length; j++) {
//       if (arr3[i] + arr3[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// console.log(adds(arr3, target));

//using hashmap

var num1 = [4, 5, 9, 7, 3, 2];
var targetvalue = 6;
function twosum(num1, targetvalue) {
  const map = new Map();
  for (const index in num1) {
    const pairtarget = targetvalue - num1[index];
    if (map.has(pairtarget)) return [index, map.get(pairtarget)];
    map.set(num1[index], index);
  }
}

console.log(twosum(num1, targetvalue));
