//https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript
function spinWords(string){
  let arr = string.split(' ');

  for(let i = 0; i < arr.length; i++){
  
    if(arr[i].length >= 5){
        arr[i] = arr[i].split('').reverse().join('')
        
    } else continue;
  }
  return arr.join(' ');
}

//https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
var moveZeros = function (arr) {
    let zeros = [],
        other = [];

    for(let i = 0; i < arr.length; i++){
        arr[i] === 0 ? zeros.push(arr[i]): other.push(arr[i]);
    }
    return other.concat(zeros)
};

// https://www.codewars.com/kata/bit-counting/train/javascript
var countBits = function(n) {
  	let arr = [];

  	while (n != 0) {
  		arr.unshift( n%2 );      
  		n = Math.floor( n/2 );
  	}
  	return arr.filter((i) => i == 1).length;
};

// https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript
function narcissistic(value) {
	let arr = (value + '').split(''),
	    result = 0;

	for(let i = 0; i < arr.length; i++){
		result += Math.pow(arr[i], arr.length);
	}
	return result == value;
}

// https://www.codewars.com/kata/parseint-reloaded/train/javascript
function parseInt2(string) {
	let result = 0,	preRes = 0,
		strings = string.split(' '),

		numeral = {
			zero: 	0,	ten: 		10,	twenty:  20,
			one: 	1,	eleven: 	11,	thirty:  30,
			two: 	2,	twelve: 	12,	forty: 	 40,
			three: 	3,	thirteen: 	13,	fifty:   50,
			four: 	4,	fourteen: 	14,	sixty: 	 60,
			five: 	5,	fifteen:	15,	seventy: 70,
			six: 	6,	sixteen: 	16,	eighty:  80,
			seven: 	7,	seventeen: 	17,	ninety:  90,
			eight: 	8,	eighteen: 	18,
			nine: 	9,	nineteen: 	19
		},

		bigNumeral = {
			hundred: 100, 
			thousand: 1000,
			million : 1000000
		}

	for (let i = 0; i < strings.length; i++) {

		let str 	= strings[ i ],
			nextStr = strings[i+1],
			num = numeral[str];

		//Двухзначное число
		if (str.indexOf('-') != -1) {
			str = str.split('-');

			num = numeral[ str[0] ]+
				  numeral[ str[1] ]

		} else if(str == 'and')	continue

		//Является ли следующее число из bigNumeral
		if ( nextStr && ['hundred', 'thousand', 'million'].includes(nextStr) ) {
			i++;

			if (bigNumeral[nextStr] < result) {
				num *= bigNumeral[nextStr];
				preRes = 0;

			} else {
				preRes += num;
				preRes *= bigNumeral[nextStr];
				num = preRes;
			}

		// Если число из bigNumeral попалось не в nextStr
		} else if (num == undefined) {
      		num = preRes * bigNumeral[ strings[i] ]
      		preRes = num;
      	
      	//Если следующее число не из bigNumeral
    	} else preRes += num;
    
		preRes > result ? result = preRes : result+=num;
	}
  return result
}

// https://www.codewars.com/kata/two-to-one/train/javascript
function longest(a,b) {
 	let arr = a + b,
      	res = [];
 	arr = arr.split('').sort();

 		for (let l = 0; l < arr.length; l++) {
 			if (res.indexOf(arr[l]) !== -1) continue;
 			
 			res.push(arr[l])
 		}
  	return res.join('')
}

// https://www.codewars.com/kata/human-readable-time/train/javascript
function humanReadable(seconds) {
  	var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
  	return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)

}
function formatDate(n){
  	var number = Number.parseInt(n)
  	return number > 9? number : '0'+number;
}

// https://www.codewars.com/kata/rot13-1/train/javascript
function rot13(message){
	let res = '';
  	for(let i = 0; i < message.length; i++){

  		let index = message.charCodeAt(i) + 13,
  			  word;

  		if (/[a-z]/.test(message[i])) {
	  	    index > 122? index+=96-122 :index;
	  	    word = String.fromCharCode(index);

  		} else if (/[A-Z]/.test(message[i])) {
  			index > 90? index+=64-90 :index;
  			word = String.fromCharCode(index);

  		} else word = message[i];
  		
  		res += word;
  	}
  	return res;
}

// https://www.codewars.com/kata/range-extraction/train/javascript
function solution(list){
	let arr = [];

	for(let i = 0; i < list.length; i++){
    	let current = list[i];
    
		if ( (current + 2) == list[i+2] ) {
			while ( (list[i] + 1) == list[i+1] ) i++;

			arr.push(current +'-'+ list[i]);
			continue;
		}
		arr.push(current)
	}
	return arr.join()
}

// https://www.codewars.com/kata/counting-duplicates/train/javascript
function duplicateCount(text){
	let count = 0, has = [];
	text = text.toUpperCase();
  
	for(let i = 0; i < text.length; i++){
		if ( has.indexOf(text[i]) != -1 ) continue;

		let re = new RegExp(text[i], 'g'),
			ltr = text.match(re);

		if (ltr.length >= 2) {
			has.push(text[i]);
			count++;
		}
	}
  	return count;
}

// https://www.codewars.com/kata/the-lift/train/javascript
var theLift = function(queues, capacity) {
	let stops = [0], lastStop = -1,

	// Найти общее кол-во людей
	peopleLeft = queues
		.filter(arr => arr.length)
		.map(arr => arr.length)

    if (peopleLeft.length) {
      peopleLeft = peopleLeft.reduce((a,b) => a+b);
      
    } else return [0];

    // Спускать/Поднимать лифт пока жители не кончатся
	while (peopleLeft > 0){
		if (lastStop === 1) {
			lastStop = moveLift(queues, queues.length-1, 'n >=0', -1); // Спустить лифт
	
		} else if (lastStop === -1) {
			lastStop = moveLift(queues, 0, 'n < queues.length', 1); //  Поднять лифт
		}
  	}

	function moveLift(home, start, end, step) {
  		let inLift = [],
  			different = step == -1? '<':'>';

		for (let n = start; eval(end); n+=step) {
			let floor = home[n],
				  currentStop = false;

			// Если чей-то этаж
		  	if (inLift.indexOf(n) != -1) {
	  			inLift = inLift.filter(a => a != n);
	  			stops.push(n);
			}
	      
		  	if (!floor.length) continue // Пропустить если этаж пустой
	      	let maxPeople = floor.length;
	      
			for (let p = 0; p < maxPeople; p++) {
				let person = floor[p],
	            	way = eval(person + different + n); // В правильную ли сторону нужно этому жителю?

				// Если лифт заполнен
				if (inLift.length >= capacity) {
					way? currentStop=true :0;
					continue;

				} else if (way){
	          		home[n].splice(p,1); // Убрать человека с этажа
					inLift.push(person); // И добавить его в лифт
					currentStop = true;
					peopleLeft--;
	          		maxPeople--;
				    p--;
				} 
			}
	      	if (n == stops[stops.length-1]) currentStop = false;
			currentStop? stops.push(n):0;
		};
   		return step;
	}
  
	stops[stops.length-1]? stops.push(0) :1;
  	return stops
}