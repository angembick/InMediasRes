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
		for(var i = 0; i< 1000; i++){
			if ((i%3===0) || (i%5 ===0)){
				total += i;
			}
		};
		alert(total);
	}


	function problem2(){
		var total = 2;
		var	first = 1;
		var	second = 2;
		var newFirst = 0;
		do{
			newFirst = second;
			second += first;
			first = newFirst;
			if(second %2 === 0){
				total+= second;
			}
		}while(second < 4000000)
		alert(total);
	};



	function problem3(){
		var number = 600851475143;

		if((number%2) === 0){
			if(isPrime(number/2) !== null){
				alert(isPrime(number/2));
			}
		}
		for(var i = 3; i<=number/2; i+=2){
			if(number %i === 0){
				if(isPrime(number/i) !== null){
					alert(isPrime(number/i));
					break;
				}
			}
		}

		function isPrime(numQuo){
			if((numQuo%2 === 0) & (numQuo !==2)){
				return null;
			}

			for(var j = 3; j <= numQuo/2; j+=2){
				if(numQuo % j === 0){
					return null
				}
			}
			return numQuo;
		}
	};




	function problem4(){
		var paliProduct = 0;
		for(var i = 100; i<100; i++){
			for(var j = 100; j<100; j++){
				for(var ixj = ((i*j)).toString().length; ixj>= 0; ixj--){
					paliCheck();
				}
			}
		}
		i = 99;
		j = 91;
		ixy = i*j;
		function paliCheck(){
			if(ixj === 0){
				alert('first sub '+(((i*j)).toString().substr(((((i*j)).toString().length)-ixj), ((((i*j)).toString().length) - (ixj+1)))));
				alert('second sub '+ (((i*j)).toString().substr((ixj-1), ixj)));
				//break;
			}
			else if((ixj === 0) & ((i * j)>paliProduct)){
				paliProduct = i*j;
			}
		};


		alert(test);
	};

	problem4();
	alert('hellpo');




});