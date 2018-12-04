var hangman;

function Hangman() {
	this.words = ['IRONHACK', 'NODEJS', 'JAVASCRIPT', 'METEOR', 'ANGULAR', 'BARCELONA', 'MADRID', 'MIAMI', 'HTML'],
	this.secretWord = '',
	this.letters = [],
	this.guessedLetter = '',
	this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
	this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
	return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
	return (keyCode >= 65 && keyCode <= 90);
};

Hangman.prototype.checkClickedLetters = function (key) {
	return (this.letters.indexOf(key.toUpperCase()) == -1);
};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
	return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function () {
	return this.guessedLetter.length == this.secretWord.length;
};

/*
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
*/
