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
		for(var i = 99; i<1000; i++){
			for(var j = 99; j<1000; j++){
				var quoStr = ((i*j)).toString();
				var quoLen = quoStr.length;
				paliCheck();
			}
		}

		function paliCheck(){
			for(var quoIndex = quoStr.length; quoIndex>= 0; quoIndex--){
				if( (quoStr.substring((quoLen-quoIndex), ((quoLen-quoIndex)+1)))!== (quoStr.substring((quoIndex-1), quoIndex))){
					break;
				}
				else if((quoIndex === 0) & ((i * j)>paliProduct)){
					paliProduct = i*j;
				}
			}
		};
		alert(paliProduct);
	};


	function problem5(){
		var product = 'empty';
		for(var i=1; isNaN(product); i++){
			for(var j = 11; j<=20; j++){
				if(i%j !==0){
					break;
				}
				else if(j ===20){
					product = i;
				}
			}
		}
		alert(product);
	};



	function problem6(){
		var sqrSum = 0;
		var sumSqr = 0;
		for(var i=1; i<=100;i++){
			sqrSum +=(i*i);
		}
		for(var i=1; i<=100;i++){
			sumSqr += i;
			if(i===100){
				sumSqr *= sumSqr;
			}
		}
		alert(sumSqr - sqrSum);
	};



	function problem7(){
		var p = 0;
		for(var i = 2; p<6; i++){
			if(isPrime(i)){
				p++;
				if(p === 6){
					alert(i);
				}
			}
		}		

		function isPrime(numQuo){
			if((numQuo%2 === 0) & (numQuo !==2)){
				return false;
			}
			for(var j = 3; j <= numQuo/2; j+=2){
				if(numQuo % j === 0){
					return false
				}
			}
			return true;
		}

	};
	problem7();



});