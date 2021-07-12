/* function sumTriangularNumbers(n) {
  'use strict';
  if (n < 0) {
    return 0;
  } else {
    const arr = [];
    let k = 1;
    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let j = 0; j <= i; j++) {
        arr[i][j] = k;
        k++;
      }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][arr[i].length - 1];
    }
    return sum;
  }
}
console.log(sumTriangularNumbers(4)); */

/* function factorial(n) {
  "use strict";
  return (n < 0) ? 0 : (n === 0) ? 1 : (n === 1) ? n : n * factorial(n - 1);

}
console.log(factorial(-2)); */
function solve(a, b) {
  "use strict";
  let arr = [];
  if (a == 0 || b == 0) {
    arr.push(a);
    arr.push(b);

  } else if (a >= 2 * b) {
    solve(a = (a - 2 * b), b);
  } else if (b >= 2 * a) {
    solve(a, b = (b - 2 * a));
  }
  return arr;
}
solve(6, 19);