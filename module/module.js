// 1 method: create selfinvoke anonimous function (function expression)

let number = 1; // global variable

(function() {
  let number = 2; //local variable
  console.log(number);

  return console.log(number + 3);
  
}())

console.log(number);

// 2 method: использование объектного интерфейса (модуль записывается в переменную и в нем записываем методы, которые будут доступны наружи )
let user = (function() {
  let private = function() {
    console.log('I am private');
  }

  return {
    sayHello: function() {
      console.log('Hello!');
    }
  }
}())

console.log(user);
console.log(user.sayHello());

// 3 method: отличие от второго: все методы изначально являются приватными, выводятся только те, которые необходимы

let user = (function() {
  let private = function() {
    console.log('I am private');
  }
  let sayHello = function() {
      console.log('Hello!');
    }

  return {
    sayHello: sayHello
  }
}())

console.log(user);
console.log(user.sayHello());
