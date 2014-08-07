function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(33.989854, -118.473859),
          zoom: 13
          center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
 
      }
      google.maps.event.addDomListener(window, 'load', initialize);
