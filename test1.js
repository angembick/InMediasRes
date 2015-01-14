$(document).ready(function() {


   function Country(name, startDate, endDate){
      this.name = name;
      this.startDate = startDate;
      this.endDate = endDate;
      this.blogArray = [];
    };

    function Blog(content, location, title){
      this.content = content;
      this.location = location;
      this.title = title;
    };

    var myTrip = [];
    myTrip[myTrip.length] = new Country('Peru','2014-08-12T11:00:00', '2014-09-08T11:00:00');
    myTrip[myTrip.length] = new Country('Bolivia','2014-09-08T11:00:00', '2014-11-12T11:00:00');
    myTrip[myTrip.length] = new Country('Chile',  '2014-11-12T11:00:00', '2014-12-08T11:00:00' );
    myTrip[myTrip.length] = new Country('Argentina', '2014-12-08T11:00:00', '2014-12-18T11:00:00' );

    var displayCountry = myTrip[myTrip.length-1];


    //REWRITE THIS 
    //one ajax call that may be called on a url with or wothout the next page token
    //this function gets calles till the nextPage token is null
    //discard global var
    $.ajax({
      type: "GET",
      url: "https://www.googleapis.com/blogger/v3/blogs/2096447250273390307/posts?fetchBodies=true&fields=items(content%2Clocation(lat%2Clng%2Cname)%2Cpublished%2Ctitle)%2CnextPageToken&key=AIzaSyBZGvhqAz0grBbzAbGdI_htb72q8uA_KlQ",
      success: function(response) {
        //populate the country array with blog content
        for(var b = 0; b <response.items.length; b++){
          for(var i = 0; i< myTrip.length; i++){
            if((response.items[b].published > myTrip[i].startDate) && (response.items[b].published < myTrip[i].endDate)){
              myTrip[i].blogArray[myTrip[i].blogArray.length] = new Blog(response.items[b].content, response.items[b].location,response.items[b].title);
            }
          };  
        }

        var nextPage = response.nextPageToken;
       
      if(nextPage != null){
        alert(nextPage);  $.ajax({
          type: "GET",
          url: "https://www.googleapis.com/blogger/v3/blogs/2096447250273390307/posts?fetchBodies=true&pageToken="+nextPage+"&fields=items(content%2Clocation(lat%2Clng%2Cname)%2Cpublished%2Ctitle)%2CnextPageToken&key=AIzaSyBZGvhqAz0grBbzAbGdI_htb72q8uA_KlQ",
          success: function(resp) {
            //populate the country array with blog content

          nextPage = resp.nextPageToken;
          } 
        });
      }
      
       //load the most recent country as a default
       //must be in the success loop so that it is called after array is populated
       populateBlogs(displayCountry);
      }
    }

    });

    $('.countryFlag').click(function(){
      var countryID = $("img", this).attr("alt");

      for(var i = 0; i<myTrip.length; i++){
       if(myTrip[i].name === countryID){
        if (displayCountry != myTrip[i]){
          displayCountry = myTrip[i];
          populateBlogs(myTrip[i]);
        }
       };
      };
    });


      function populateBlogs(countryObj){ 

        $('.blog').empty();

        for(var i = 0; i<countryObj.blogArray.length; i++){
          //open a div for blog unique with the location in the response array
          $('<div></div>').addClass('posts'+i).appendTo('.blog');

          //add a div for the post content
          $('<div></div>').addClass('postsText').attr('id','postsText'+i).appendTo('.posts'+i);

          //Add blog text and titles
          $('#postsText'+i).append("<h2>" + countryObj.blogArray[i].title + "</h2>");
          $('#postsText'+i).append(countryObj.blogArray[i].content);


          for (lat in countryObj.blogArray[i].location) {

            //add a div for the post map
            $('<div></div>').addClass('postsMap').attr('id','postsMap'+i).appendTo('.posts'+i);

            var mapOptions = {
                center: new google.maps.LatLng(countryObj.blogArray[i].location.lat,countryObj.blogArray[i].location.lng),
                zoom: 6,
                disableDefaultUI: true
              };
              var blogMap = new google.maps.Map($('#postsMap'+i)[0], mapOptions);
              $('#postsMap'+i).css('height', $('#postsText'+i).height());

              var myLatlng = new google.maps.LatLng(countryObj.blogArray[i].location.lat,countryObj.blogArray[i].location.lng);
              var marker = new google.maps.Marker({
                position: myLatlng,
                map: blogMap,
                title: countryObj.blogArray[i].location.name
              })
          }
        };
      }



    //load the most recent country as a default
    populateBlogs(displayCountry);
});