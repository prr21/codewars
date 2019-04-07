describe('Stop gninnipS My sdroW!', () => {
	describe('Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.'
	,() => {
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
	describe('Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.'
	,() => {
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