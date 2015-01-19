$(document).ready(function(){
	
	function insertBlogs(){
      $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/blogger/v3/blogs/2096447250273390307/posts?startDate=2015-01-19T12%3A59%3A00-08%3A00&key=AIzaSyBZGvhqAz0grBbzAbGdI_htb72q8uA_KlQ",
        success: function(response) {
         	 //populate the country array with blog content
         	for(var i = 0; i <response.items.length; i++){
            
	          //open a div for blog unique with the location in the response array
	          $('<div></div>').addClass('posts'+i).appendTo('.problems');

	          //add a div for the post content
	          $('<div></div>').addClass('postsText').attr('id','postsText'+i).appendTo('.posts'+i);

	          //Add blog text and titles
	          $('#postsText'+i).append("<h2>" + response.items[i].title + "</h2>");
	          $('#postsText'+i).append(response.items[i].content);
			}
		   }
		})
	}; 

	insertBlogs();   

	function problem1(){
		var total = 0;
		for(var i = 0; i< 10; i++){
			if ((i%3===0) && (i%5 ===0)){
				total += i;
			}
		};
		alert(total);
	}

	problem1();





});