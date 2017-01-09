var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
	
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
	
var mouseX;
var mouseY;
	
var bgImage = new Image();
var backBtn = new Image();
	
var backgroundY = 0;
	
var buttonX = [870];
var buttonY = [470];
var buttonWidth = [61];
var buttonHeight = [41];
	
bgImage.onload = function(){
	context.drawImage(bgImage, 0, backgroundY);
};

bgImage.src = "./src/creditsscreen.jpg";
backBtn.onload = function(){
	context.drawImage(backBtn, buttonX[0], buttonY[0]);
}

backBtn.src = "./src/back.png";
timerId = setInterval("update()", 1000/frames);
	
canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);
	
function update() {
	clear();
	draw();
}

function clear() {
	context.clearRect(0, 0, width, height);
}

function draw(){
	context.drawImage(bgImage, 0, backgroundY);
	context.drawImage(backBtn, buttonX[0], buttonY[0]);
}

function checkPos(mouseEvent){
	if(mouseEvent.pageX || mouseEvent.pageY == 0){
		mouseX = mouseEvent.pageX - this.offsetLeft;
		mouseY = mouseEvent.pageY - this.offsetTop;
	}else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
		mouseX = mouseEvent.offsetX;
		mouseY = mouseEvent.offsetY;
	}
}

function checkClick(mouseEvent){
	if(mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]+20){
		if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]+20){
			window.location.assign("index.html");
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
		}
	}
}