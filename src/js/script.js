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
  });

  //Form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    contactForm = document.querySelector('#form'),
    contactInput = contactForm.getElementsByTagName('input');
  
    statusMessage.classList.add('status');

     form.addEventListener('submit', function(event) {
       event.preventDefault();
       form.appendChild(statusMessage);
      
       let request = new XMLHttpRequest();
       request.open('POST', 'server.php');
       request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

       let formData = new FormData(form);
      
       let obj = {};
       formData.forEach(function(value, key) {
         obj[key] = value;
       });
       let json = JSON.stringify(obj);
       request.send(json);

       request.addEventListener('readystatechange', function(){
         if (request.readyState < 4) {
           statusMessage.innerHTML = message.loading;
         } else if (request.readyState === 4 && request.status === 200){
           statusMessage.innerHTML = message.success;
         } else {
           statusMessage.innerHTML = message.failure;
         }
       });
       // Reset input value
       for (let i = 0; i < input.length; i++) {
         input[i].value = '';        
       }
    });

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      contactForm.appendChild(statusMessage);
      
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      
      let formData2 = new FormData(contactForm);
      let obj2 = {};
      
      
      formData2.forEach(function(value, key) {        
        obj2[key] = value;
        console.log(obj2[key]);
      });
      
      let json = JSON.stringify(obj2);      
      request.send(json);

      request.addEventListener('readystatechange', function(){
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status === 200){
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      });
      // Reset input value
      for (let i = 0; i < contactInput.length; i++) {
        contactInput[i].value = '';        
      }
    });
});