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
		for(var i = 2; p<10001; i++){
			if(isPrime(i)){
				p++;
				if(p === 10001){
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


function problem8(){
	var bigProduct = 0;
	var numArray = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450".split("");
	for(var i = 0; i<(numArray.length-4); i++){
		if((numArray[i]*numArray[i+1]*numArray[i+2]*numArray[i+3])>bigProduct){
			bigProduct = numArray[i]*numArray[i+1]*numArray[i+2]*numArray[i+3];
		}
	}
	alert(bigProduct);
};
	problem8();



});