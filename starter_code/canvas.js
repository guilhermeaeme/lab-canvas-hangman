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

HangmanCanvas.prototype.drawLine = function (x1, y1, x2, y2) {
	this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
	this.ctx.stroke();
	this.ctx.closePath();
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
			this.drawLine(250, 550, 250, 150);
	        break;
	    case 7:
			this.drawLine(250, 150, 400, 150);
	        break;
	    case 6:
			this.drawLine(400, 150, 400, 175);
	        break;
	    case 5:
	    	this.ctx.beginPath();
	        this.ctx.arc(400, 225, 50, 0, Math.PI*2);
			this.ctx.stroke();
			this.ctx.closePath();
	        break;
       	case 4:
			this.drawLine(400, 275, 400, 400);
	        break;
	    case 3:
			this.drawLine(400, 400, 450, 460);
	        break;
	    case 2:
			this.drawLine(400, 400, 350, 460);
	        break;
	    case 1:
			this.drawLine(400, 300, 450, 360);
	        break;
	    case 0:
			this.drawLine(400, 300, 350, 360);
	        break;
	    default:
	        //
	}
};

HangmanCanvas.prototype.gameOver = function () {
	var img = new Image();
	img.onload = function(){
		var x = (hangmanCanvas.canvas.width/2) - (this.width/2);
		var y = (hangmanCanvas.canvas.height/2) - (this.height/2);

		hangmanCanvas.ctx.drawImage(img, x, y);
	};
	img.src = 'images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
	var img = new Image();
	img.onload = function(){
		var x = (hangmanCanvas.canvas.width/2) - (this.width/2);
		var y = (hangmanCanvas.canvas.height/2) - (this.height/2);

		hangmanCanvas.ctx.drawImage(img, x, y);
	};
	img.src = 'images/awesome.png';
};

hangmanCanvas = new HangmanCanvas();
