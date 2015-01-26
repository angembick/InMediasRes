$(document).ready(function(){
	
	function insertBlogs(){
      $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/blogger/v3/blogs/2096447250273390307/posts?startDate=2015-01-19T12%3A59%3A00-08%3A00&key=AIzaSyBZGvhqAz0grBbzAbGdI_htb72q8uA_KlQ",
        success: function(response) {
         	 //populate the country array with blog content
         	for(var i = 0; i <response.items.length; i++){
            
	          //create row for every third container or id its the last item
	          if((i%3 === 0)){
	          	$('<div>').addClass('row').appendTo('.problems');
	          }
	          //close row
	          else if((i-1)%3 === 0 || (i=== response.items.length-1)){
	          	$('</div>').appendTo('.problems');
	          }

	          //open a div for blog unique with the location in the response array
	          $('<div></div>').addClass('posts'+i+' container well col-sm-3 col-sm-offset-1').appendTo('.problems');

	          //add a div for the post content
	          $('<div></div>').addClass('postsText postsText'+i).appendTo('.posts'+i);

	          //Add titles
	          $('.postsText'+i).append("<h2>" + response.items[i].title + "</h2>");
	          //create dropdown div and show text when clicked
	          $('<div></div>').addClass('panel-group').appendTo('.postsText'+i);
	          $('<div ></div').addClass('panel panel-success').appendTo('.postsText'+i+' .panel-group');
	          $('<div></div>').addClass('panel-heading text-center').appendTo('.postsText'+i+' .panel-success');
	          $('<i></i>').addClass('glyphicon glyphicon-question-sign panel-title').attr('data-toggle','collapse').attr('data-target','#question'+i).appendTo('.postsText'+i+' .panel-heading');
	          $('<div></div>').addClass('panel-collapse collapse').attr('id','question'+i).appendTo('.postsText'+i+' .panel-success');
	          $('<div>'+response.items[i].content+'</div>').addClass('panel-body').appendTo('.postsText'+i+' .panel-collapse');


			}
		   }
		})
	}; 

	insertBlogs();   

	var eulerSolutions=[];
	eulerSolutions.push('');

	var eulerNthPerson=[];
	eulerNthPerson.push('427974');//1
	eulerNthPerson.push('352126');//2
	eulerNthPerson.push('256486');//3
	eulerNthPerson.push('232481');//4
	eulerNthPerson.push('245524');//5
	eulerNthPerson.push('247366');//6
	eulerNthPerson.push('212151');//7
	eulerNthPerson.push('185761');//8
	eulerNthPerson.push('184559');//9
	eulerNthPerson.push('169342');//10

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
		for(var i = 0; i<(numArray.length-13); i++){
			if((numArray[i]*numArray[i+1]*numArray[i+2]*numArray[i+3]*numArray[i+4]*numArray[i+5]*numArray[i+6]*numArray[i+7]*numArray[i+8]*numArray[i+9]*numArray[i+10]*numArray[i+11]*numArray[i+12])>bigProduct){
				bigProduct = numArray[i]*numArray[i+1]*numArray[i+2]*numArray[i+3]*numArray[i+4]*numArray[i+5]*numArray[i+6]*numArray[i+7]*numArray[i+8]*numArray[i+9]*numArray[i+10]*numArray[i+11]*numArray[i+12];
			}
		}
		alert(bigProduct);
	};


	function problem9(){
		var c = 'empty';
		for(var a = 1; isNaN(c);a++){
			for(var b = 2; b<500; b++){
				if(Math.sqrt((a*a) + (b*b)) % 1 === 0 ){
					if(a + b + (Math.sqrt((a*a) + (b*b))) === 1000){
						c = Math.sqrt((a*a) + (b*b));
						alert(a*b*c);
						break;
					}
				}
			}
		}
	};

	function problem10(){
		//too slow
		var primeSum = 5;
		for(var i = 5; i<2000000 ; i+=2){
			if(isPrime(i)){
				primeSum +=i;
			}
		}
		function isPrime(numQuo){
			for(var j = 3; j <= numQuo/2; j+=2){
				if(numQuo % j === 0){
					return false
				}
			}
			return true;
		}
		alert(primeSum);
	};


	function problem11(){
		var arrayOfRows = [
		 ('08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08').split(' '),
		 ('49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00').split(' '),
		 ('81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65').split(' '),
		 ('52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91').split(' '),
		 ('22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80').split(' '),
		 ('24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50').split(' '),
		 ('32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70').split(' '),
		 ('67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21').split(' '),
		 ('24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72').split(' '),
		 ('21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95').split(' '),
		 ('78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92').split(' '),
		 ('16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57').split(' '),
		 ('86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58').split(' '),
		 ('19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40').split(' '),
	 	 ('04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66').split(' '),
		 ('88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69').split(' '),
		 ('04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36').split(' '),
		 ('20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16').split(' '),
		 ('20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54').split(' '),
		 ('01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48').split(' ')
		];
		var bigQuo = 0;

		for(var r = 0; r<arrayOfRows.length; r++){
			alert(r);
			//for(var ri = 0; ri<(arrayOfRows[0].length-4); ri+1){
				//if((arrayOfRows[r][ri] * arrayOfRows[r][ri+1] * arrayOfRows[r][ri+2] * arrayOfRows[r][ri+3])>bigQuo){
				//	bigQuo = (arrayOfRows[r][ri] * arrayOfRows[r][ri+1] * arrayOfRows[r][ri+2] * arrayOfRows[r][ri+3]);
				//}
			//}

		}

		for(var c = 0; c<arrayOfRows[0].length; c++){
			for(var ci = 0; ci<(arrayOfRows.length-4); ci++){
				if((arrayOfRows[ci][c] * arrayOfRows[ci+3][c] * arrayOfRows[ci+3][c] * arrayOfRows[ci+3][c])>bigQuo){
					bigQuo = (arrayOfRows[ci][c] * arrayOfRows[ci+3][c] * arrayOfRows[ci+3][c] * arrayOfRows[ci+3][c]);
				}
			}
		}

		for(var d = 0; d<(arrayOfRows[0].length-4); d++){
			for(var di = 0; di<(arrayOfRows.length-4); di++){
				if((arrayOfRows[d][di] * arrayOfRows[d+1][di+1] * arrayOfRows[d+2][di+2] * arrayOfRows[d+3][di+3])>bigQuo){
					bigQuo =(arrayOfRows[d][di] * arrayOfRows[d+1][di+1] * arrayOfRows[d+2][di+2] * arrayOfRows[d+3][di+3]);
				}
			}
		}
		alert(bigQuo);
	};
	problem11();




});