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