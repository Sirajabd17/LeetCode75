// given an array nums return an array answer such that answer[i] is equal to the products of all the element of nums except num[i]
//[1,2,3,4] output [24,12,8,6]

const num = [1, 2, 3, 4, 5];
var productArrray = function (num) {
  const len = num.length;
  const left = Array(len).fill(0);
  const right = Array(len).fill(0);
  const output = Array(len).fill(0);

  left[0] = num[0];
  right[len - 1] = num[len - 1];
  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * num[i];
  }
  for (let i = len - 2; i > 0; i--) {
    right[i] = right[i + 1] * num[i];
  }
  output[0] = right[1];
  output[len - 1] = left[len - 2];

  for (let i = 1; i < len - 1; i++) {
    output[i] = left[i - 1] * right[i + 1];
  }
  return output;
};
console.log(productArrray(num));
