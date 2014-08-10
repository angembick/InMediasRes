
    function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(33.989854, -118.473859),
          zoom: 13
        };
        var map = new google.maps.Map(document.getElementById("picturemap"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);