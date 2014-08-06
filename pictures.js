function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(33.989854, -118.473859),
          zoom: 13
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);


var main = function() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/media/popular?access_token=48121533.5db54f4.df09ebad5d3d47d3979743c9c3b57b37",
    success: function(data) {
      for (var i = 0; i < 6; i++) {
        $(".latest").append("<li>hi</li>");
      }
    }

  });
};


$(document).ready(main);