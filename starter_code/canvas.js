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
	var lineWidth = 50;
	var space = 20;

	for(var i = 0; i < hangman.secretWord.length; i++) {
		this.ctx.beginPath();
		this.ctx.moveTo(x, 700);
		this.ctx.lineTo(x + lineWidth, 700);
		this.ctx.stroke();
		this.ctx.stroke();
		this.ctx.closePath();

		x += lineWidth + space;

		this.ctx.moveTo(x, 700);
	}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

hangmanCanvas = new HangmanCanvas();
