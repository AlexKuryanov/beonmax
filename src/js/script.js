'use strict';
let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect()); //получить все координаты элемента
console.log(box.getBoundingClientRect().left); //левая координата

console.log(document.documentElement.clientWidth); //ширина документа
console.log(document.documentElement.clientHeight); // высота документа
console.log(document.documentElement.scrollTop); // высота документа

btn.addEventListener('click', function () {
    // box.style.height = box.scrollHeight + 'px'; //развернуть содержимое
    // console.log(box.scrollTop); // получить кол-во рх прокрутки вниз
    box.scrollTop = 0; // вернуться в начало
});

scrollBy(0, 200); // скролит страницу на 200рх вниз
scrollTo(0, 200); // перемещает страницу к заданным координатам