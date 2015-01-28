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

	//You are the 126635th person to have solved this problem.
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
	eulerNthPerson.push('126635');//11

	eulerNthPerson.push('122102');//13

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

		for(var r = 0; r<arrayOfRows.length-19; r++){
			for(var ri = 0; ri<(arrayOfRows[0].length-3); ri++){
				if((arrayOfRows[r][ri] * arrayOfRows[r][ri+1] * arrayOfRows[r][ri+2] * arrayOfRows[r][ri+3])>bigQuo){
					bigQuo = (arrayOfRows[r][ri] * arrayOfRows[r][ri+1] * arrayOfRows[r][ri+2] * arrayOfRows[r][ri+3]);
				}
			}

		}

		for(var c = 0; c<arrayOfRows[0].length; c++){
			for(var ci = 0; ci<(arrayOfRows.length-3); ci++){
				if((arrayOfRows[ci][c] * arrayOfRows[ci+1][c] * arrayOfRows[ci+2][c] * arrayOfRows[ci+3][c])>bigQuo){
					bigQuo = (arrayOfRows[ci][c] * arrayOfRows[ci+1][c] * arrayOfRows[ci+2][c] * arrayOfRows[ci+3][c]);
				}
			}
		}

		for(var d = 0; d<(arrayOfRows[0].length-3); d++){
			for(var di = 0; di<(arrayOfRows.length-3); di++){
				if((arrayOfRows[d][di] * arrayOfRows[d+1][di+1] * arrayOfRows[d+2][di+2] * arrayOfRows[d+3][di+3])>bigQuo){
					bigQuo =(arrayOfRows[d][di] * arrayOfRows[d+1][di+1] * arrayOfRows[d+2][di+2] * arrayOfRows[d+3][di+3]);
				}
			}
		}
		for(var l = 3; l<(arrayOfRows.length); l++){
			for(var li = 0; li<(arrayOfRows[0].length-3); li++){
				if((arrayOfRows[l][li] * arrayOfRows[l-1][li+1] * arrayOfRows[l-2][li+2] * arrayOfRows[l-3][li+3])>bigQuo){
					bigQuo =(arrayOfRows[l][li] * arrayOfRows[l-1][li+1] * arrayOfRows[l-2][li+2] * arrayOfRows[l-3][li+3]);
				}
			}
		}

		alert(bigQuo);
	};


	function problem12(){
		//print out triangle numbers
		var value = 0
		var notFound = true;
		for(var i = 1; notFound; i++){
			value=0;
			for(var j = i; j>0; j--){
				value +=j;
			}
			if(findDivisors(value)>500){
				alert(value+ ' divisors '+ findDivisors(value));
				notFound = false;
			}
		}

		//find out how many divisors a number has
		function findDivisors(quotient){
			var arrJ = [];
			var arrI = [];

			for (var p = 1; p<=quotient/2; p++){
				if(quotient%p === 0){
					//if the divisor hasent already been identified add it 
					if(p !== arrJ[arrJ.length-1]){
						if(p !== quotient/p){
							arrI.push(p);
							arrJ.push(quotient/p);
						}
						//but dont add it twice
						else{
							arrI.push(p);
						}
					}
					else
						break;
					
				}
			}

			return (arrI.length+arrJ.length);
		};
	};


	function problem13(){
		
		var sum = 0;
		//place numbers into an array
		var numbers= [];
		numbers.push(37107287533902102798797998220837590246510135740250);
		numbers.push(46376937677490009712648124896970078050417018260538);
		numbers.push(74324986199524741059474233309513058123726617309629);
		numbers.push(91942213363574161572522430563301811072406154908250);
		numbers.push(23067588207539346171171980310421047513778063246676);
		numbers.push(89261670696623633820136378418383684178734361726757);
		numbers.push(28112879812849979408065481931592621691275889832738);
		numbers.push(44274228917432520321923589422876796487670272189318);
		numbers.push(47451445736001306439091167216856844588711603153276);
		numbers.push(70386486105843025439939619828917593665686757934951);
		numbers.push(62176457141856560629502157223196586755079324193331);
		numbers.push(64906352462741904929101432445813822663347944758178);
		numbers.push(92575867718337217661963751590579239728245598838407);
		numbers.push(58203565325359399008402633568948830189458628227828);
		numbers.push(80181199384826282014278194139940567587151170094390);
		numbers.push(35398664372827112653829987240784473053190104293586);
		numbers.push(86515506006295864861532075273371959191420517255829);
		numbers.push(71693888707715466499115593487603532921714970056938);
		numbers.push(54370070576826684624621495650076471787294438377604);
		numbers.push(53282654108756828443191190634694037855217779295145);
		numbers.push(36123272525000296071075082563815656710885258350721);
		numbers.push(45876576172410976447339110607218265236877223636045);
		numbers.push(17423706905851860660448207621209813287860733969412);
		numbers.push(81142660418086830619328460811191061556940512689692);
		numbers.push(51934325451728388641918047049293215058642563049483);
		numbers.push(62467221648435076201727918039944693004732956340691);
		numbers.push(15732444386908125794514089057706229429197107928209);
		numbers.push(55037687525678773091862540744969844508330393682126);
		numbers.push(18336384825330154686196124348767681297534375946515);
		numbers.push(80386287592878490201521685554828717201219257766954);
		numbers.push(78182833757993103614740356856449095527097864797581);
		numbers.push(16726320100436897842553539920931837441497806860984);
		numbers.push(48403098129077791799088218795327364475675590848030);
		numbers.push(87086987551392711854517078544161852424320693150332);
		numbers.push(59959406895756536782107074926966537676326235447210);
		numbers.push(69793950679652694742597709739166693763042633987085);
		numbers.push(41052684708299085211399427365734116182760315001271);
		numbers.push(65378607361501080857009149939512557028198746004375);
		numbers.push(35829035317434717326932123578154982629742552737307);
		numbers.push(94953759765105305946966067683156574377167401875275);
		numbers.push(88902802571733229619176668713819931811048770190271);
		numbers.push(25267680276078003013678680992525463401061632866526);
		numbers.push(36270218540497705585629946580636237993140746255962);
		numbers.push(24074486908231174977792365466257246923322810917141);
		numbers.push(91430288197103288597806669760892938638285025333403);
		numbers.push(34413065578016127815921815005561868836468420090470);
		numbers.push(23053081172816430487623791969842487255036638784583);
		numbers.push(11487696932154902810424020138335124462181441773470);
		numbers.push(63783299490636259666498587618221225225512486764533);
		numbers.push(67720186971698544312419572409913959008952310058822);
		numbers.push(95548255300263520781532296796249481641953868218774);
		numbers.push(76085327132285723110424803456124867697064507995236);
		numbers.push(37774242535411291684276865538926205024910326572967);
		numbers.push(23701913275725675285653248258265463092207058596522);
		numbers.push(29798860272258331913126375147341994889534765745501);
		numbers.push(18495701454879288984856827726077713721403798879715);
		numbers.push(38298203783031473527721580348144513491373226651381);
		numbers.push(34829543829199918180278916522431027392251122869539);
		numbers.push(40957953066405232632538044100059654939159879593635);
		numbers.push(29746152185502371307642255121183693803580388584903);
		numbers.push(41698116222072977186158236678424689157993532961922);
		numbers.push(62467957194401269043877107275048102390895523597457);
		numbers.push(23189706772547915061505504953922979530901129967519);
		numbers.push(86188088225875314529584099251203829009407770775672);
		numbers.push(11306739708304724483816533873502340845647058077308);
		numbers.push(82959174767140363198008187129011875491310547126581);
		numbers.push(97623331044818386269515456334926366572897563400500);
		numbers.push(42846280183517070527831839425882145521227251250327);
		numbers.push(55121603546981200581762165212827652751691296897789);
		numbers.push(32238195734329339946437501907836945765883352399886);
		numbers.push(75506164965184775180738168837861091527357929701337);
		numbers.push(62177842752192623401942399639168044983993173312731);
		numbers.push(32924185707147349566916674687634660915035914677504);
		numbers.push(99518671430235219628894890102423325116913619626622);
		numbers.push(73267460800591547471830798392868535206946944540724);
		numbers.push(76841822524674417161514036427982273348055556214818);
		numbers.push(97142617910342598647204516893989422179826088076852);
		numbers.push(87783646182799346313767754307809363333018982642090);
		numbers.push(10848802521674670883215120185883543223812876952786);
		numbers.push(71329612474782464538636993009049310363619763878039);
		numbers.push(62184073572399794223406235393808339651327408011116);
		numbers.push(66627891981488087797941876876144230030984490851411);
		numbers.push(60661826293682836764744779239180335110989069790714);
		numbers.push(85786944089552990653640447425576083659976645795096);
		numbers.push(66024396409905389607120198219976047599490197230297);
		numbers.push(64913982680032973156037120041377903785566085089252);
		numbers.push(16730939319872750275468906903707539413042652315011);
		numbers.push(94809377245048795150954100921645863754710598436791);
		numbers.push(78639167021187492431995700641917969777599028300699);
		numbers.push(15368713711936614952811305876380278410754449733078);
		numbers.push(40789923115535562561142322423255033685442488917353);
		numbers.push(44889911501440648020369068063960672322193204149535);
		numbers.push(41503128880339536053299340368006977710650566631954);
		numbers.push(81234880673210146739058568557934581403627822703280);
		numbers.push(82616570773948327592232845941706525094512325230608);
		numbers.push(22918802058777319719839450180888072429661980811197);
		numbers.push(77158542502016545090413245809786882778948721859617);
		numbers.push(72107838435069186155435662884062257473692284509516);
		numbers.push(20849603980134001723930671666823555245252804609722);
		numbers.push(53503534226472524250874054075591789781264330331690);

		for(var i = 0; i<numbers.length; i++){
			sum +=numbers[i];
		}
		//show first 10 numbers
		sum = (sum.toString()).slice(0,11);

		alert(sum);



	};
	//problem12();




});