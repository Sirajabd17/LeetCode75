//Question53 leetcode

let num = [1, 2, 3, 4];
var maxarray = function (num) {
  let mx = num[0];
  let sm = 0;
  num.forEach((n) => {
    sm += n;
    mx = Math.max(mx, sm);
    if (sm < 0) sm = 0;
  });
  return mx;
};
console.log(maxarray(num));
