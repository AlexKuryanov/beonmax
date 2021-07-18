$(document).ready(function() {
  
  $('.main_btna, .main_btn, [href="#sheldure"]').on('click', function(){
    $('.overlay').fadeIn(800);
    $('.modal').slideDown(800);
  });

  $('.close').on('click', function() {
    $('.overlay').fadeOut(800);
    $('.modal').slideUp(800);
  });

});