/* jshint devel:true */
'use strict';

console.log('© '+(new Date()).getFullYear()+' - Los del Marote');

var headerHeight = $('#header').height();

// Hero Parallax
$(window).scroll(function(){
  var position = $(window).scrollTop();
  if(position < headerHeight){
    $('.hero__rose').css('transform','translate3d(0,-'+position/35+'%,0)');

    //$('.hero').css('background-position', 'center -'+position/2+'px');
    //var bgpos = 100 - (100 * (1 - (Math.max(headerHeight-position,0)/headerHeight)/2));
    var bgpos = 100 - (100 * (position/headerHeight)/2);
    console.log(bgpos);
    $('.hero').css('background-position', 'center '+bgpos+'%');

    var scale = 0.75 + (1 - (Math.max(headerHeight-position,0)/headerHeight))/2;
    $('.hero__heading').css('transform','translate3d(0,-'+position/20+'%,0) scale3d('+scale+','+scale+',1)');
  }
});

// Smooth Scroll
$('a[href*=#]:not([href=#])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 150
      }, 1000);
      return false;
    }
  }
});
