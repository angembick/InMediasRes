function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(37.7423320, -122.4524330),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);