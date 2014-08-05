$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/media/popular?access_token=48121533.5db54f4.df09ebad5d3d47d3979743c9c3b57b37",
  success: function(data) {
    for (var i = 0; i < 6; i++) {
      $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
  }
});

$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/25025320/?access_token=48121533.5db54f4.df09ebad5d3d47d3979743c9c3b57b37",
  success: function(data) {
    $('.name').text(data.data.username);
    $('.tagline').text(data.data.bio);
  }
});

$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/users/25025320/media/recent/?access_token=48121533.5db54f4.df09ebad5d3d47d3979743c9c3b57b37",
  success: function(data) {
    for (var i = 0; i < 6; i++) {
    $(".latest").append("<li><a target='_blank' href='" + data.data[i].link +"'><img   src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
  }
});