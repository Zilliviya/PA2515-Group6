var can1;
var can2;

var ctx1;
var ctx2;

var bigbutterfly;

var mx;
var my; 

var bigbutterflyBody=[];
var smallbutterflyBody=[];
var smallbody=[];


var canWidth;
var canHeight;
//Resolving the interval inconsistencies caused by function requestAnimationFrame 
var lastTime;//The time the previous frame was executed
var deltaTime;//Time interval between two frames

var backgroundpicture=new Image();

var flower;
var pollen;
var smallbutterfly;

var data; //Score

document.body.onload=gm;
function gm()//game
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gmloop(); //gameloop
}

function init()
{
	//obtain the convas and context
	can1=document.getElementById("canvas1");//butterflies, dust, UI, circle
	ctx1=can1.getContext('2d');//draw 2D scene
	can2=document.getElementById('canvas2');//background, flowers, pollens
	ctx2=can2.getContext('2d'); 

	can1.addEventListener('mousemove', onMouseMove,false);

	backgroundpicture.src= "./src/background.jpg"
	canWidth=can1.width;
	canHeight=can1.height;

	flower=new flowerObj();
	flower.init();

	pollen=new pollenObj();
	pollen.init();

	bigbutterfly=new bigbutterflyObj();
	bigbutterfly.init();

	smallbutterfly=new smallbutterflyObj();
	smallbutterfly.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	for(var i=0;i<4;i++)
	{
		bigbutterflyBody[i]=new Image();
		bigbutterflyBody[i].src="./src/bigbutterflyBody"+i+".png";
	}


	for(var i=0;i<4;i++)
	{
		smallbutterflyBody[i]=new Image();
		smallbutterflyBody[i].src="./src/smallbutterflyBody"+i+".png";
	}

    for(var i=0;i<4;i++)
    {
    	smallbody[i]=new Image;
    	smallbody.src="./src/small"+i+".png";
    }
    data = new dataObj();
    ctx1.font = "40px";  //Score
	ctx1.textAlign = "center"; //Score

}
function gmloop()
{
	window.requestAnimationFrame(gmloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)deltaTime=49;

	drawbackground();
	flower.draw();
	pollenMonitor();
	pollen.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	bigbutterfly.draw();

	bigPollensCollision();

	bigsmallcollision()

	smallbutterfly.draw();
	data.draw(); //Score

}

function onMouseMove(e)
{
	if(!data.gameOver) {             //Score
		if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}