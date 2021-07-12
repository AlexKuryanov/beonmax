"use strict";
let userName = 'Ivan',
  userAge = 30,
  mail = 'ex@mail.ru';

document.write(`Пользователю ${userName} ${userAge} лет. Его почтовый адрес ${mail}`);

function makeArray() {
  var items = [];

  for (let i = 0; i < 10; i++) {
    var item = function () {
      console.log(i);
    };
    items.push(item);
  }

  return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
  console.log(this);
};
fun();

let obj = {
  number: 5,
  sayNumber: function () {
    let say = () => {
      console.log(this);
    };
    say();
  }
};
obj.sayNumber();