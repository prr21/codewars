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