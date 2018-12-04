var hangmanCanvas;

function HangmanCanvas(secretWord) {
	this.canvas = document.getElementById('hangman'),
	this.ctx = this.canvas.getContext('2d')
}

HangmanCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	// this.ctx.fillRect(10, 10, this.canvas.width-20, this.canvas.height-20);

	this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
	var x = 350;
	var y = 600;
	var lineWidth = 50;
	var space = 20;

	for(var i = 0; i < hangman.secretWord.length; i++) {
		this.ctx.beginPath();
		this.ctx.moveTo(x, y);
		this.ctx.lineTo(x + lineWidth, y);
		this.ctx.stroke();
		this.ctx.stroke();
		this.ctx.closePath();

		x += lineWidth + space;

		this.ctx.moveTo(x, y);
	}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
	var x = 375 + (50 * index) + (20 * index);
	var y = 590;

	this.ctx.beginPath();
	this.ctx.font = '48px serif';
	this.ctx.textAlign = 'center';
	this.ctx.fillText(hangman.secretWord[index], x, y);
	this.ctx.closePath();
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
	var index = 10 - errorsLeft;

	var x = 375 + (50 * index);
	var y = 200;

	this.ctx.beginPath();
	this.ctx.font = '48px serif';
	this.ctx.textAlign = 'center';
	this.ctx.fillText(letter, x, y);
	this.ctx.closePath();
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

hangmanCanvas = new HangmanCanvas();
