var hangman;

function Hangman() {
	this.words = ['IRONHACK', 'NODEJS', 'JAVASCRIPT', 'METEOR', 'ANGULAR', 'BARCELONA', 'MADRID', 'MIAMI', 'HTML'],
	// this.words = ['TESTE'],
	this.secretWord = '',
	this.placeholder = '',
	this.letters = [],
	this.guessedLetter = '',
	this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
	this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]

	this.placeholder = "_ ".repeat(this.secretWord.length);
	console.log(this.placeholder);

	return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
	return (keyCode >= 65 && keyCode <= 90);
};

Hangman.prototype.checkClickedLetters = function (key) {
	let keyUpper = key.toUpperCase();
	let result = (this.letters.indexOf(keyUpper) == -1);

	if(this.errorsLeft > 0 && this.guessedLetter.length < this.secretWord.length) {
		if(result) {
			this.letters.push(keyUpper);

			let indexOfLetter = this.secretWord.indexOf(keyUpper);
			if(indexOfLetter >= 0) {
				while(indexOfLetter > -1) {
					indexOfLetter = this.secretWord.indexOf(keyUpper, indexOfLetter)
					if(indexOfLetter > -1) {
						this.addCorrectLetter(indexOfLetter);
						indexOfLetter++;
					}
				}
			} else {
				this.addWrongLetter(keyUpper);
			}
		}
	}

	return result;
};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += this.secretWord[i].toUpperCase();

	var newPlaceholder = [];
	var placeholderArray = this.placeholder.split(" ");
	for(j = 0; j < placeholderArray.length; j++) {
		if(j == i) {
			newPlaceholder.push(this.secretWord[i].toUpperCase());
		} else if(placeholderArray[j] !== "_") {
			newPlaceholder.push(placeholderArray[j]);
		} else {
			newPlaceholder.push("_");
		}
	}

	this.placeholder = newPlaceholder.join(" ");
	console.log(this.placeholder);

	if(hangmanCanvas) {
		hangmanCanvas.writeCorrectLetter(i);
	}

	this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft--;

	if(hangmanCanvas) {
		hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
	}

	this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
	let result = this.errorsLeft == 0;

	if(result && hangmanCanvas) {
		hangmanCanvas.gameOver();
	}

	return result;
};

Hangman.prototype.checkWinner = function () {
	let result = this.guessedLetter.length == this.secretWord.length;

	if(result && hangmanCanvas) {
		hangmanCanvas.winner();
	}

	return result;
};


document.getElementById('start-game-button').onclick = function () {
	hangman = new Hangman();

	hangman.getWord();

	if(hangmanCanvas) {
		hangmanCanvas.createBoard();
	}
};


document.onkeydown = function (e) {
	if(hangman && hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
		
	}
};
