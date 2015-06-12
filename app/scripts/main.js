/* jshint devel:true */
'use strict';

console.log('© '+(new Date()).getFullYear()+' - Los del Marote');

var headerHeight = $('#header').height();

// Hero Parallax
$(window).scroll(function(){
  var position = $(window).scrollTop();
  if(position < headerHeight){
    $('.hero__rose').css('transform','translate3d(0,-'+position/25+'%,0)');

    //$('.hero').css('background-position', 'center -'+position/2+'px');
    //var bgpos = 100 - (100 * (1 - (Math.max(headerHeight-position,0)/headerHeight)/2));
    var bgpos = 100 - (100 * (position/headerHeight)/2);
    console.log(bgpos);
    $('.hero').css('background-position', 'center '+bgpos+'%');

    var scale = 0.75 + (1 - (Math.max(headerHeight-position,0)/headerHeight))/2;
    $('.hero__heading').css('transform','translate3d(0,-'+position/20+'%,0) scale3d('+scale+','+scale+',1)');
  }
});
