var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;
//Resolving the interval inconsistencies caused by function requestAnimationFrame 
var lastTime;//The time the previous frame was executed
var deltaTime;//Time interval between two frames

var backgroundpicture=new Image();

document.body.onload=gm;
function gm()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gmloop(); 
}

function init()
{
	//obtain the convas and context
	can1=document.getElementById("canvas1");//butterflies, dust, UI, circle
	ctx1=can1.getContext('2d');//draw 2D scene
	can2=document.getElementById('canvas2');//background, flowers, pollens
	ctx2=can2.getContext('2d'); 

	backgroundpicture.src= "./src/background.jpg"
	canWidth=can1.width;
	canHeight=can1.height;

}
function gmloop()
{
	window.requestAnimationFrame(gmloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	drawbackground();

}