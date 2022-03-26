/*

 THIS SCRIPT FOR GLOBAL USE

*/


AOS.init();

/*
reverense to https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
*/

$(document).ready(function(){
    // Menambahkan smooth scrolling
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });