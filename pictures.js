function initialize() {
        var myLatlng = new google.maps.LatLng(33.989854, -118.473859);
        var mapOptions = {
          zoom: 13,
          center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var image = {
          url:'flower.png',
          //The size image file.
          size: new google.maps.Size(225, 120),
          //The point on the image to measure the anchor from. 0, 0 is the top left.
          origin: new google.maps.Point(0, 0),
          //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
          anchor: new google.maps.Point(189, 116)}
        
        //Setting the shape to be used with the Glastonbury map marker.
        var markerShape = {
         coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
         type: 'poly'
        };

        var marker = new google.maps.Marker({
         position: myLatlng,
          map: map,
         icon: image,
         shape: markerShape,
         title: 'Hello World!'
        });
 
      }
      google.maps.event.addDomListener(window, 'load', initialize);
