/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/***/ ((module) => {

function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      days = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsCount = 0,
      daysCount = 0,
      total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('input', function() {
        personsCount = +this.value;

        total = daysCount * (personsCount * 5000);

        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }

      });

      days.addEventListener('input', function() {
        daysCount = +this.value;

        total = daysCount * (personsCount * 5000);

        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }

      });

      place.addEventListener('change', function() {
        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });
}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/***/ ((module) => {

function form() {
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    contactForm = document.querySelector('#form');  
    statusMessage.classList.add('status');

    function sendForm(elem) {

      elem.addEventListener('submit', function(event){
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {

          return new Promise(function(resolve, reject) {

            let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.onreadystatechange = function() {
                  if (request.readyState < 4) {
                    resolve();
                  } else if (request.readyState === 4) {
                    if (request.status === 200 && request.status < 300) {
                      resolve();
                    } else {
                      reject();
                    }                   
                  } 
                }
                request.send(data);
          })
        } // End postData

        // Reset input value
        function clearInput(){
          for (let i = 0; i < input.length; i++) {
          input[i].value = '';        
          }
        }

        postData(formData)
          .then(() => statusMessage.innerHTML = message.loading)
          .then(() => statusMessage.innerHTML = message.success)
          .catch(() => statusMessage.innerHTML = message.failure)
          .then(clearInput)

      
      });
    }

    sendForm(form);
    sendForm(contactForm);
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/***/ ((module) => {

function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descrBtn = document.querySelectorAll('.description-btn');

  for (let i = 0; i < descrBtn.length; i++) {
    descrBtn[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
    if(document.querySelector('.status')) {
      document.querySelector('.status').remove(); 
    }
    
    for (let i = 0; i < descrBtn.length; i++) {
      descrBtn[i].classList.remove('more-splash');
    }   
    
  });  
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/***/ ((module) => {

function slider() {

  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

      //swipe slides from end to start
      if (n > slides.length) {
        slideIndex = 1;
      }
      //swipe slides from start to end
      if (n < 1) {
        slideIndex = slides.length;
      }
      // Hide all slides and remove from dots class active 
      slides.forEach(item => item.style.display = 'none');
      dots.forEach(item => item.classList.remove('dot-active'));

      // show one slide
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlide(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
      plusSlide(-1);
    });

    next.addEventListener('click', function() {
      plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
          currentSlide(i);
        }
      }
    });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/***/ ((module) => {

function tabs() {

  const tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].classList.remove('active');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].classList.add('active');
    }
  }

  info.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          tab[i].classList.add('active');
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/***/ ((module) => {

function timer() {
  let deadline = '2021-08-07T11:59';

  function getTimeRemaining(endtime) {

    if (Date.parse(endtime) < Date.parse(new Date())) {
      return {
        'hours': '0',
        'minutes': '0',
        'seconds': '0'
      };
    } else {
      let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      } else {
        hours.textContent = t.hours;
      }
      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }
      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', function() {
  "use strict";
  let calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js"),
    form = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
    slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
    tabs = __webpack_require__(/*! ./parts/tabs */ "./js/parts/tabs.js"),
    timer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js"),
    modal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js");

  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map