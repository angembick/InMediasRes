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
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 8,
        center: latlng,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
  }

Y.on("domready", function(){
     initialize();   
})