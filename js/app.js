$(document).ready(function() {

  setHeight();  
  $(window).resize(function() {
    setHeight();
  });

  $('.scrolly').scrolly();
});

function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.winheight').css('height', windowHeight);
  };