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