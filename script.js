'use strict';
let box = document.getElementById('box'),
  btn = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  firstHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/* for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
} */

/* hearts.forEach(function (heart) {
  heart.style.backgroundColor = 'blue';
}); */
let div = document.createElement('div'),
  text = document.createTextNode('Here was I');

div.classList.add('black');

// document.body.appendChild(div);
//wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello, world!</h1>';
div.textContent = 'Hello, world!';


document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(hearts[1]);

document.body.replaceChild(btn[1], circle[1]);