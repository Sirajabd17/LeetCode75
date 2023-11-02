//brute force approch
let arr3 = [1, 2, 6, 8];
let target = 8;
function adds(num, target) {
  for (var i = 0; i < arr3.length; i++) {
    for (var j = i + 1; j < arr3.length; j++) {
      if (arr3[i] + arr3[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(adds(arr3, target));
