
    
    jQuery( document ).ready(function( $ ) {
  $.ajax({
      type: "GET",
      url: "https://www.googleapis.com/blogger/v3/blogs/2096447250273390307/posts?fetchBodies=true&fields=items(content%2Clocation(lat%2Clng)%2Cpublished%2Ctitle)&key=AIzaSyBZGvhqAz0grBbzAbGdI_htb72q8uA_KlQ",
      success: function(response) {

        var mapOptions = {
          center: new google.maps.LatLng(-15.840868, -70.025868),
          zoom: 3
        };
        var map = new google.maps.Map(document.getElementById("journeyMap"),
            mapOptions);

      
        for (var i = 0; i < response.items.length; i++) {
          //open a div for blog unique with the location in the response array
          $('<div></div>').addClass('posts'+i).appendTo(".blog");

          //add a div for the post content
          $('<div></div>').addClass('postsText'+i).appendTo(".posts"+i"");

          $(".postsText"+i+"").append("<h2>" + response.items[i].title + "</h2>");
          $(".postsText"+i+"").append(response.items[i].content);
          

          //create google maps for those blogs that have geolocation
          for (lat in response.items[i].location) {
            //add a div for the post map
            $('<div></div>').addClass('postsMap'+i).appendTo('.posts'+i);

              var mapOptions = {
                center: new google.maps.LatLng(response.items[i].location.lat,response.items[i].location.lng),
                zoom: 3
              };
              var blogMap = new google.maps.Map($('.postsMap'+1+"")[0], mapOptions);


              var myLatlng = new google.maps.LatLng(response.items[i].location.lat,response.items[i].location.lng);
              var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: response.items[i].title
              })
          }
          if (i+1<response.items.length) {
            $(".postsText"+i+"").append("<hr/>");
          }
        }

      }
    });

      google.maps.event.addDomListener(window, 'load', initialize);

      
// Code using $ as usual goes here.
});