window.addEventListener('DOMContentLoaded', function () {
  
  // Tabs
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

  //Timer
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

  // Modal
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
    for (let i = 0; i < descrBtn.length; i++) {
      descrBtn[i].classList.remove('more-splash');
    }
    statusMessage.textContent = '';
  });

  //Form  
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

    // Slider
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
    })
});