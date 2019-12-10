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

// https://www.codewars.com/kata/binomial-expansion/train/javascript
function expand(expr) {
	let re  = /[-+]?(\d+|[a-z])[a-z]?[/^]?\d?/g;
	expr = expr.match(re);

	let power = +expr.splice(2)[0],
		newExpr = expr.slice();
	
	if (power === 0) return '1';
	else if (power === 1) return expr.join('');

	let calc = new calcExp();
	while(--power > 0){
		newExpr = calc.calcArrs(expr,newExpr);
	}

	newExpr = newExpr.filter((i) => parseInt(i) != 0 );
	return newExpr.join('')
}

class calcExp {
	calcArrs(arr1, arr2) {
		let res = [];

		for(let i = 0; i < arr1.length; i++){
			let n1 = arr1[i],

				newArr = arr2.map((n2) => {
				return this.parse(n1,n2)
			})
			res.push(newArr)
		}

		let val1 = res[0].shift(), val2 = res[1].pop();

		let finalRes = [val1], x = this.getX(val1),
			regexp = new RegExp( x +"[^=]*");

		for (let i = 0; i < res[0].length; i++) {
			let r1 = res[0], r2 = res[1];

			let sum = +this.getNum(r1[i]) + +this.getNum(r2[i]),
				foo = r1[i].match(regexp)[0];

			sum = sum >= 0? '+'+sum:sum;
			finalRes.push(sum+foo);
		}
		finalRes.push(val2);
		return  finalRes;
	}

	regEx = {
		reOnXF:  /^[+-]?[\d?]*[a-z]\^([0-9])+$/, // Ищем неизвестное в степени (x^3)
		reOnX:   /^[+-]?[\d?]*[a-z]$/,			// Ищем неизвестное (x)
		reOnNum: /^[+-]?[\d]*$/				   // Ищем число
	};

	parse(n1,n2) {
		const { reOnXF, reOnX, reOnNum } = this.regEx;

		while(true) {
			if ( reOnX.test(n1) && reOnX.test(n2) ) {
				return this.parseX(n1, n2);

			} else 
				if (reOnX.test(n1) && reOnNum.test(n2)) {
				return this.parseX_Num(n1,n2);

			} else if ( reOnXF.test(n1) && reOnX.test(n2)) {
				return this.parseXF_X(n1,n2);

			} else if ( reOnXF.test(n1) && reOnNum.test(n2)) {
				return this.parseXF_Num(n1,n2);

			} else if ( reOnXF.test(n1) && reOnXF.test(n2)) {
				return this.parseXF(n1,n2);

			} else if ( reOnNum.test(n1) && reOnNum.test(n2)) {
				return this.parseNum(n1,n2);

			} else {let n = n2; n2 = n1; n1 = n; }
		}
	}

	checkXOnMark = (num) => {
		if (num == 1) {
			return '';

		} else if (num == -1) {
			return '-';

		} else return num;
	}

	getNum = (n) => {
		let z = n.match(/^[-+]/);
		n = n.match(/^[-+]?\d+/);

		z = z? z[0]:'';
		return n? n[0]:z+1;
	}
	getX = (n) => {
		return n.match(/[a-z]/)[0]
	}
	getFact = (n) => {
		return n.match(/\d+$/)[0];
	}
	getXF = (n) => {
		let fac = +this.getFact(n),
			num = +this.getNum(n),
			x = this.getX(n);

		let obj = {fac,num,x}
		return obj;
	}

	parseNum = (n1, n2) => {
		let res = n1*n2;
			res = res >= 0? '+'+res:''+res;
		return res;
	}
	parseX = (n1, n2) => {
		let num1 = this.getNum(n1),
			num2 = this.getNum(n2),
			sum = this.checkXOnMark(num1*num2),
			x = this.getX(n1);

		return sum + x+'^'+2;
	}
	parseXF = (n1, n2) => {
		let obj1 = this.getXF(n1),
			obj2 = this.getXF(n2),

			sum = this.checkXOnMark(obj1.num*obj2.num);
		let res = sum + obj1.x+'^'+(obj1.fac + --obj2.fac);

		return res
	}
	parseXF_X = (n1, n2) => {
		let obj = this.getXF(n1),
			num = this.getNum(n2),

			sum = this.checkXOnMark(obj.num * num);
		let res = sum + obj.x +'^'+(obj.fac+1);
		return res
	}
	parseX_Num = (n1, n2) => {
		let x = this.getX(n1),
			num1 = this.getNum(n1),
			sum = this.checkXOnMark(num1*n2);

		return sum+x;
	}
	parseXF_Num = (n1, n2) => {
		let obj = this.getXF(n1);

		return (n2*obj.num) + obj.x+'^'+obj.fac;
	}
}

// https://www.codewars.com/kata/sum-of-intervals/train/javascript
function sumIntervals(intervals){
	intervals.sort( ([a],[b]) => a-b);

	let min = intervals[0][0],
		max = intervals[0][1],
		count = max-min;

	intervals.map( (n) => {
		if (max > n[1] || max == n[1]){
			return

		} else if ( n[1] > max && n[0] < max ){
			count += n[1] - max;
			max = n[1];

		} else {
			count += n[1] - n[0];
			max = n[1];			
		}
	})
	return count;
}

// https://www.codewars.com/kata/calculator/train/javascript
const Calculator = function() {
  	this.evaluate = string => {
  		const higerOrd = /(\S+) (\*|\/) (\S+)/;
  		const lowerOrd = /(\S+) (\+|\-) (\S+)/;

  		let result = string;

  		while(1) {
  			const { replaceExp, calcExp } = this;

  			let higerExp = result.match(higerOrd)
			let lowerExp = result.match(lowerOrd)

  			if (higerExp) {
  				result = replaceExp( higerExp, calcExp(higerExp) );

  			} else if (lowerExp){
	  			result = replaceExp( lowerExp, calcExp(lowerExp) );

  			} else return result
  		}
  	}

  	this.calcExp = exp => {
  		let symbs = exp[0].split(' ');
  		let opr = symbs[1];
  		let result;

  		switch (opr) {
  			case ('/'):
				return +symbs[0] / +symbs[2];

	  		case ('*'):
				return +symbs[0] * +symbs[2];

	  		case ('-'):
				return +symbs[0] - +symbs[2];

	  		case ('+'):
				return +symbs[0] + +symbs[2];
  		}
  	}

  	this.replaceExp = (exp, newExp) => {
  		if ( (newExp + '').indexOf('e') !== -1) {
  			newExp = 0;
  		}
  		return exp.input.replace(exp[0], newExp);
  	}
};

var calculate = new Calculator()