"use strict";

// create array
/* let arr = [1, 2, 3, "four", 5];
console.log(arr);

// delete last element
arr.pop();
console.log(arr);

//add new element to the end of array
arr.push("5");
console.log(arr);

//delete first element
arr.shift();
console.log(arr);

//add new element at the start of array
arr.unshift("first");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function (item, index, mass) {
  console.log(index + ": " + item + " (массив: " + mass + ")");
});

let mass = [1, 3, 4, 6, 7];

//get indexes of array's items:
for (let i in mass) {
  console.log(i);
}

//get elements:
for (let item of mass) {
  console.log(item);
} */

// let ans = prompt("", ""),
//   arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["aaa", "bbb", "cc", "gg"],
//   i = arr.join(", ");

// console.log(arr);
// console.log(i);

let arr = ["aaa", "zzz", "cc", "jki"],
  i = arr.sort();
console.log(arr);

let arr2 = [1, 25, 4, 15];
i = arr2.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arr2);

//filter
let arr3 = [1, 25, 4, 15];
let res = arr3.filter((a) => a > 10);
console.log(res);

let addNum = arr3.filter((a) => a % 5 === 0);
console.log(addNum);

//map
let numbers = ["15", "21", "30", "45", "18"];
let result = numbers.map(el => Number(el));
console.log(result);

//every
let test = numbers.every(el => el % 3 === 0);
console.log(test);

//some
test = numbers.some(el => el == 45);
console.log(test);

//reduce
let num = [15, 21, 30, 45, 18];
res = num.reduce((a, b) => a * b);
console.log(res);

let arrInArr = [
  [5, 7],
  [9, 2],
  [3, 8]
];
res = arrInArr.reduce((a, b) => a.concat(b));
console.log(res);