var main = function(){
    $('.icon-menu').click(function(){
        $('.menu').animate({
            left:'0px'
            }, 200);
        $('body').animate({
            right: '285px'
            }, 200);
    });
    
    $('.icon-close').click(function(){
        $('.menu').animate({
            left: '-285px'
            }, 200);
        $('body').animate({
            left: '0px'
            }, 200);
    });
};

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(37.742332037, -122.4524330),
          zoom: 12
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);    
    
$(document). ready(main)