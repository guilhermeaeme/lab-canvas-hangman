var hangmanCanvas;

function HangmanCanvas(secretWord) {
	this.canvas = document.getElementById('hangman'),
	this.ctx = this.canvas.getContext('2d')
}

HangmanCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

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

	var x = 500 + (40 * index);
	var y = 200;

	this.ctx.beginPath();
	this.ctx.font = '48px serif';
	this.ctx.textAlign = 'center';
	this.ctx.fillText(letter, x, y);
	this.ctx.closePath();

	this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
	switch(shape) {
	    case 9:
	        this.ctx.beginPath();
	        this.ctx.moveTo(200, 600);
	        this.ctx.lineTo(300, 600);
	        this.ctx.lineTo(250, 550);
	        this.ctx.lineTo(200, 600);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 8:
	        this.ctx.beginPath();
	        this.ctx.moveTo(250, 550);
	        this.ctx.lineTo(250, 150);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 7:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(250, 150);
	        this.ctx.lineTo(400, 150);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 6:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 150);
	        this.ctx.lineTo(400, 175);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 5:
	    	this.ctx.beginPath();
	        this.ctx.arc(400, 225, 50, 0, Math.PI*2);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
       	case 4:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 275);
	        this.ctx.lineTo(400, 400);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 3:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 400);
	        this.ctx.lineTo(450, 460);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 2:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 400);
	        this.ctx.lineTo(350, 460);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 1:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 300);
	        this.ctx.lineTo(450, 360);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    case 0:
	    	this.ctx.beginPath();
	        this.ctx.moveTo(400, 300);
	        this.ctx.lineTo(350, 360);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
	    default:
	        //
	}
};

HangmanCanvas.prototype.gameOver = function () {
	console.log('GAME OVER!');
};

HangmanCanvas.prototype.winner = function () {
	console.log('YOU WON!');
};

hangmanCanvas = new HangmanCanvas();
