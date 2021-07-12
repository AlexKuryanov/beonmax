'use strict';

const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const li = document.createElement('li');
const column = document.querySelectorAll('.column');
const adv = document.querySelector('.adv');
const title = document.getElementById('title');
const question = document.getElementById('prompt');

menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

title.textContent = '"Мы продаем только подлинную технику Apple';

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";
column[1].removeChild(adv);

question.textContent = prompt('Какое у Вас отношение к технике Apple?', '');

//Решение тренера
/* let menu = document.getElementsByClassName("menu")[0],
  menuItem = document.getElementsByClassName("menu-item"),
  title = document.getElementById("title"),
  adv = document.getElementsByClassName("adv")[0],
  promptforApple = document.querySelector("#prompt"),
  menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

menuItemLi.classList.add("menu-item"); // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);


document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple" // Заменить текст

adv.remove(); // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?"); // Отношение к технике Apple
promptforApple.textContent = yourOpinion; */