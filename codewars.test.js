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

	  	it( "7 является числом Армстронга", () => {
    		assert.equal(narcissistic( 7 ), true, "7 is narcissistic" );
  		});
		it( "1634 является числом Армстронга", () => {
		    assert.equal(narcissistic( 1634 ), true, "1634 is narcissistic" );
	  	});
	  	it( "42360 не является числом Армстронга", () => {
		    assert.equal(narcissistic( 42360 ), false, "42360 is not narcissistic" );
	  	});
	  	it( "47214 не является числом Армстронга", () => {
		    assert.equal(narcissistic( 47214 ), false, "47214 is not narcissistic" );
	  	});
	  	it( "24678050 является числом Армстронга", () => {
		    assert.equal(narcissistic( 24678050 ), true, "24678050 is narcissistic" );
	  	});
	});
});

describe('parseInt() reloaded', () => {
	describe(`In this kata we want to convert a string into an integer. 
		The strings simply represent the numbers in words.`, () => {

		it( "One должен конвертироваться в 1", () => {
			(assert.equal(parseInt2('one'), 1, "Expected 1"));
		})
		it( "Twenty-one должно конвертироваться в 21", () => {
			(assert.equal(parseInt2('twenty-one'), 21, "Expected 21"));
		})
		it( "Two hundred forty-six должен конвертироваться в 246", () => {
			(assert.equal(parseInt2('two hundred forty-six'), 246, "Expected 246"));
		})
		it( "Six hundred sixty-six thousand six hundred sixty-six должен конвертироваться в 666666", () => {
			(assert.equal(parseInt2('six hundred sixty-six thousand six hundred and sixty-six'), 666666, "Expected 666666"));
		})
		it( "Five hundred thousand three hundred должен конвертироваться в 500300", () => {
			(assert.equal(parseInt2('five hundred thousand three hundred'), 500300, "Expected 500300"));
		})
	});
});

describe('Human Readable Time', () => {
	describe(`Write a function, which takes a non-negative integer (seconds) 
			as input and returns the time in a human-readable format (HH:MM:SS)`, () => {

	  	it( "Должен вывести корректный формат времени", () => {
		    assert.equal(humanReadable(0), '00:00:00');
	  	});
	  	it( "Должен вывести корректный формат времени", () => {
		    assert.equal(humanReadable(90), '00:01:30');
	  	});
	  	it( "Должен вывести корректный формат времени", () => {
		    assert.equal(humanReadable(3599), '00:59:59');
	  	});
	  	it( "Должен вывести корректный формат времени", () => {
		    assert.equal(humanReadable(45296), '12:34:56');
	  	});
	  	it( "Должен вывести корректный формат времени", () => {
		    assert.equal(humanReadable(359999), '99:59:59');
	  	});
	});
});
describe(`Two to One`, () => {
	describe(`Take 2 strings s1 and s2 including only letters from ato z. 
		Return a new sorted string, the longest possible, containing distinct letters,
		each taken only once - coming from s1 or s2.`, () => {

	  	it( "Должно вывести aehrsty", () => {
		    assert.equal(longest("aretheyhere", "yestheyarehere"), 'aehrsty');
	  	});
	  	it( "Должно вывести abcdefghilnoprstu", () => {
		    assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), 'abcdefghilnoprstu');
	  	});
		it( "Должно вывести cdeghjklmnopqrtuvwyz ", () => {
		    assert.equal(longest("eerrmmmzzttjjjjuueeeeelllpppwrrrrgggwwg",
		    "loodyyllkkjjjvvhhhcccggqnnnnneeeeeggg"), 'cdeghjklmnopqrtuvwyz');
	  	});
	  	it( "Должно вывести eghjklnoqrtuvwxyz", () => {
		    assert.equal(longest("oooojeeuuvvvnnxrrwwwjgghhhhzzzzooonnn",
		    "tjjyyyyykyynooooowwwllllzzzwwqqzrrrt"), 'eghjklnoqrtuvwxyz');
	  	});
	  	it( "Должно вывести dfhijklmnopqstxyz ", () => {
		    assert.equal(longest("pppiikkkffffxxmmjjyttnnxxxjjjjhhhhnnddd",
		    "isssnnnppzzzqqqxxxpooooxxxllllttqqqoxx"), 'dfhijklmnopqstxyz');
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
				
		it("Строка test должна быть зашифрована в grfg", () => {
			assert.equal(rot13("test"), "grfg")
		})
		it("Строка 10+2 is twelve. должна быть зашифрована в gjryir.", () => {
			assert.equal(rot13("10+2 is twelve."), "10+2 vf gjryir.")
		})
		it("Строка Codewars должна быть зашифрована в Pbqrjnef", () => {
			assert.equal(rot13("Codewars"), "Pbqrjnef")
		})
		it("Строка Ruby is cool! должна быть зашифрована в pbby!", () => {
			assert.equal(rot13("Ruby is cool!"), "Ehol vf pbby!")
		})
		it("Строка abcdefghijklmnopqrstuvwxyz должна быть зашифрована в nopqrstuvwxyzabcdefghijklm", () => {
			assert.equal(rot13("abcdefghijklmnopqrstuvwxyz"), "nopqrstuvwxyzabcdefghijklm")
		})
	});
});
describe('Range Extraction', () => {
	describe(`A format for expressing an ordered list of integers is to use a comma separated list of either 
			-individual integers
			or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
			The range includes all integers in the interval including both endpoints. 
			It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
			Complete the solution so that it takes a list of integers in increasing order 
			and returns a correctly formatted string in the range format.`, () => {

		it(`Должно получить следующую строку "-6,-3-1,3-5,7-11,14,15,17-20"`, () => {
			assert.equal(
				solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), 
				"-6,-3-1,3-5,7-11,14,15,17-20"
			)
		})				
		it(`Должно получить следующую строку "-3--1,2,10,15,16,18-20"`, () => {
			assert.equal(
				solution([-3,-2,-1,2,10,15,16,18,19,20]), 
				"-3--1,2,10,15,16,18-20"
			)
		})
		it(`Должно получить следующую строку "-66,-63,-61,-59,-58,-56,-54,-51--49,-47,-46,-43,-41,-39"`, () => {
			assert.equal(
				solution([-66, -63, -61, -59, -58, -56, -54, -51, -50, -49, -47, -46, -43, -41, -39]), 
				"-66,-63,-61,-59,-58,-56,-54,-51--49,-47,-46,-43,-41,-39"
			)
		})
		it(`Должно получить следующую строку "-52,-49,-47--45,-43,-40,-38,-37,-35,-33,-32,-30,-28"`, () => {
			assert.equal(
				solution([-52, -49, -47, -46, -45, -43, -40, -38, -37, -35, -33, -32, -30, -28]), 
				"-52,-49,-47--45,-43,-40,-38,-37,-35,-33,-32,-30,-28"
			)
		})
		it(`Должно получить следующую строку "-89,-87--85,-83--81,-79,-77,-74--72,-70,-68,-65"`, () => {
			assert.equal(
				solution([-89, -87, -86, -85, -83, -82, -81, -79, -77, -74, -73, -72, -70, -68, -65]), 
				"-89,-87--85,-83--81,-79,-77,-74--72,-70,-68,-65"
			)
		})
	});
});
describe(`Count the number of Duplicates`, () => {
	describe(`Write a function that will return the count of distinct case-insensitive
	 		alphabetic characters and numeric digits that occur more than once in the input string.
	 		The input string can be assumed to contain only alphabets
	 		(both uppercase and lowercase) and numeric digits.`, () => {

		it(`У "abcde" 0 дубликатов`, () => {
			assert.equal(duplicateCount("abcde"), 0)
		})
		it(`У "Indivisibilities" 2 дубликата`, () => {
			assert.equal(duplicateCount("Indivisibilities"), 2)
		})
		it(`У "abcdefxyz" 0 дубликатов`, () => {
			assert.equal(duplicateCount("abcdefxyz"), 0)
		})
		it(`У "abcdefghABCDabcabA" 4 дубликата`, () => {
			assert.equal(duplicateCount("abcdefghABCDabcabA"), 4)
		})
		it(`У "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 26 дубликата`, () => {
			assert.equal(duplicateCount("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 26)
		})
	});	
});
describe(`The Lift`, () => {
	describe(`A multi-floor building has a Lift in it. People are queued on different floors waiting for the Lift.
		Some people want to go up. Some people want to go down. The floor they want to go to is represented by a number 
		(i.e. when they enter the Lift this is the button they will press). 
		Check kata https://www.codewars.com/kata/the-lift/train/javascript for information and rules`, () => {

		it(`Лифт должен останавливаться на 0,1,2,3,4,5,0 этажах`, () => {
			let queues = [[], [3], [4], [], [5], [], [], []];
			let result = theLift(queues,5);

			expect([0, 1, 2, 3, 4, 5, 0]).to.deep.equal(result)
		})
		it(`Лифт должен останавливаться на 0, 1, 2, 3, 6, 5, 3, 2, 0 этажах`, () => {
			let queues = [[3], [2], [0], [2], [], [], [5]];
			let result = theLift(queues,5);

			expect([0, 1, 2, 3, 6, 5, 3, 2, 0]).to.deep.equal(result)
		})
		it(`Лифт должен останавливаться на 0, 2, 4, 2, 4, 2, 0 этажах`, () => {
			let queues = [[], [], [4, 4, 4, 4], [], [2, 2, 2, 2], [], []];
			let result = theLift(queues,2);

			expect([0, 2, 4, 2, 4, 2, 0]).to.deep.equal(result)
		})
		it(`Лифт должен останавливаться на 0, 3, 5, 4, 0, 3, 5, 4, 0 этажах`, () => {
			let queues = [[3, 3, 3, 3, 3, 3], [], [], [], [], [4, 4, 4, 4, 4, 4], []];
			let result = theLift(queues,5);

			expect([0, 3, 5, 4, 0, 3, 5, 4, 0]).to.deep.equal(result)
		})
		it(`Лифт должен останавливаться 
			на 0, 6, 5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 3, 2, 1, 0, 1, 0 этажах`, () => {
			let queues = [[], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
			let result = theLift(queues,5);

			expect([0, 6, 5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 3, 2, 1, 0, 1, 0]).to.deep.equal(result)
		})
		
	});	
});