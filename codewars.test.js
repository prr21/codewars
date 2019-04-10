describe('Stop gninnipS My sdroW!', () => {
	describe(`Write a function that takes in a string of one or more words, 
			and returns the same string, but with all five or more letter words reversed 
			(Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
			Spaces will be included only when more than one word is present.` ,() => {

		it('"Welcome" должно выдать строку "emocleW"', () => {
			assert.equal(spinWords("Welcome"), "emocleW")});

		it('"Hey fellow warriors" должно выдать строку "ey wollef sroirraw"', () => {
			assert.equal(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")});

		it('"This is a test" должно выдать строку "This is a test"', () => {
			assert.equal(spinWords("This is a test"), "This is a test")});

		it('"This is another test" должно выдать строку "This is rehtona test"', () => {
			assert.equal(spinWords("This is another test"), "This is rehtona test")});

		it('"You are almost to the last test" должно выдать строку "You are tsomla to the last test"', () => {
			assert.equal(spinWords("You are almost to the last test"), "You are tsomla to the last test")});

		it('"Just kidding there is still one more" должно выдать строку "Just gniddik ereht is llits one more"', () => {
			assert.equal(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more")});

		it('"Seriously this is the last one" должно выдать строку "ylsuoireS this is the last one"', () => {
			assert.equal(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one")});
	})
})

describe('Moving Zeros To The End', () => {
	describe(`Write an algorithm that takes an array and moves all of the zeros to the end, 
			preserving the order of the other elements.`, () => {

		it('Все нули должны быть в конце', () => {
			assert.equal(
				JSON.stringify( moveZeros([1,2,0,1,0,1,0,3,0,1]) ),
			 	JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));
		});
		it('Все нули должны быть в конце', () => {
			assert.equal(
				JSON.stringify( moveZeros([9,0,0,9,1,2,0,1,0,1,0,3,0,1,9,0,0,0,0,9]) ),
			 	JSON.stringify([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]));
		});
		it('Все нули должны быть в конце', () => {
			assert.equal(
				JSON.stringify( moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]) ),
			 	JSON.stringify(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]));
		});
		it('Все нули должны быть в конце', () => {
			assert.equal(
				JSON.stringify( moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]) ),
			 	JSON.stringify(["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]));
		});
		it('Все нули должны быть в конце', () => {
			assert.equal(
				JSON.stringify( moveZeros([0,1,null,2,false,1,0]) ),
			 	JSON.stringify([1,null,2,false,1,0,0]));
		});
	});
});

describe('Bit Counting', () => {
	describe(`Write a function that takes an integer as input, 
			and returns the number of bits that are equal to one in the binary representation of that number. 
			You can guarantee that input is non-negative.`, () => {

		it('0 в двоичном представлении равен " ", у которого единиц 0', () => {
			assert.equal(countBits(0), 0);
		});
		it('4 в двоичном представлении равен 100, у которого единиц ', () => {
			assert.equal(countBits(4), 1);
		});
		it('3811 в двоичном представлении равен 111011100011, у которого единиц 8', () => {
			assert.equal(countBits(3811), 8);
		});
		it('392902058 в двоичном представлении равен 10111011010110011010110101010, у которого единиц 17', () => {
			assert.equal(countBits(392902058), 17);
		});
		it('183337941 в двоичном представлении равен 1010111011011000001111010101, у которого единиц 16', () => {
			assert.equal(countBits(183337941), 16);
		});
		
	});
});

describe('Does my number look big in this?', () => {
	describe(`A Narcissistic Number is a number which is the sum of its own digits, 
			each raised to the power of the number of digits in a given base. In this Kata, 
			we will restrict ourselves to decimal (base 10).`, () => {

	  	it( "7 является числом Армстронга", function() {
    		assert.equal(narcissistic( 7 ), true, "7 is narcissistic" );
  		});
		it( "1634 является числом Армстронга", function() {
		    assert.equal(narcissistic( 1634 ), true, "1634 is narcissistic" );
	  	});
	  	it( "42360 не является числом Армстронга", function() {
		    assert.equal(narcissistic( 42360 ), false, "42360 is not narcissistic" );
	  	});
	  	it( "47214 не является числом Армстронга", function() {
		    assert.equal(narcissistic( 47214 ), false, "47214 is not narcissistic" );
	  	});
	  	it( "24678050 является числом Армстронга", function() {
		    assert.equal(narcissistic( 24678050 ), true, "24678050 is narcissistic" );
	  	});
	});
});

describe('Human Readable Time', () => {
	describe(`Write a function, which takes a non-negative integer (seconds) 
			as input and returns the time in a human-readable format (HH:MM:SS)`, () => {

	  	it( "Должен вывести корректный формат времени", function() {
		    assert.equal(humanReadable(0), '00:00:00');
	  	});
	  	it( "Должен вывести корректный формат времени", function() {
		    assert.equal(humanReadable(90), '00:01:30');
	  	});
	  	it( "Должен вывести корректный формат времени", function() {
		    assert.equal(humanReadable(3599), '00:59:59');
	  	});
	  	it( "Должен вывести корректный формат времени", function() {
		    assert.equal(humanReadable(45296), '12:34:56');
	  	});
	  	it( "Должен вывести корректный формат времени", function() {
		    assert.equal(humanReadable(359999), '99:59:59');
	  	});
	});
});
describe('Rot13', () => {
	describe(`ROT13 is a simple letter substitution cipher that replaces a letter 
			with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. 
			Create a function that takes a string and returns the string ciphered with Rot13.
			If there are numbers or special characters included in the string, they should be returned as they are.
			Only letters from the latin/english alphabet should be shifted, 
			like in the original Rot13 "implementation".`, () => {
				
		it("Строка test должна быть зашифрована в grfg", function(){
			assert.equal(rot13("test"), "grfg")
		})
		it("Строка 10+2 is twelve. должна быть зашифрована в gjryir.", function(){
			assert.equal(rot13("10+2 is twelve."), "10+2 vf gjryir.")
		})
		it("Строка Codewars должна быть зашифрована в Pbqrjnef", function(){
			assert.equal(rot13("Codewars"), "Pbqrjnef")
		})
		it("Строка Ruby is cool! должна быть зашифрована в pbby!", function(){
			assert.equal(rot13("Ruby is cool!"), "Ehol vf pbby!")
		})
		it("Строка abcdefghijklmnopqrstuvwxyz должна быть зашифрована в nopqrstuvwxyzabcdefghijklm", function(){
			assert.equal(rot13("abcdefghijklmnopqrstuvwxyz"), "nopqrstuvwxyzabcdefghijklm")
		})
	});
});