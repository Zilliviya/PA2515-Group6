var dataObj = function() {
	this.pollenNum = 0;
	this.double = 1;   
	this.score = 0;	//Score
	this.gameOver = false;   //Score
	this.alpha = 0;//Score
};
dataObj.prototype.draw = function() {
	
	var w = can1.width; 
	var h = can1.height;
	ctx1.save();
	ctx1.fillStyle = "#fff";
	ctx1.font = "20px Verdana"; 
	ctx1.shadowColor = "white";
	ctx1.shadowBlur = 5; 
	ctx1.fillText("Your score：" + this.score, w * 0.5, h - 50); //Score
	ctx1.restore();
	ctx1.save();
	ctx1.font = "50px Verdana";
	ctx1.shadowColor = "white";//Score
	ctx1.shadowBlur = 10; //Score
	//Remind player the game is over on canvas
	if(this.gameOver) {  //Score
		this.alpha += deltaTime * 0.0003;
		if(this.alpha > 1) {
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")";//Score control transparency
		ctx1.fillText("Game Over", w * 0.5, h * 0.5); //Score
	}
	ctx1.restore();//Score

};
dataObj.prototype.addScore = function() {                //Score
	this.score += this.pollenNum * 10 * this.double;  //yellow pollen
	this.pollenNum = 0;
	this.double = 1;
};