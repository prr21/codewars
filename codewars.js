describe('Stop gninnipS My sdroW!', () => {
	describe('Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.', 
	() => {
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