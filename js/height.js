$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.main').css('height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
