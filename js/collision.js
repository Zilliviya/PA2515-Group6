//Judge the distance between the big butterfly and the fruit
function bigPollensCollision()
{
      
	for(var i = 0; i < pollen.num ; i++)
	{
        if (pollen.alive[i])
         {
         	var l= calLength2(pollen.x[i], pollen.y[i], bigbutterfly.x, bigbutterfly.y);
         	if (l<900) 
         	{
         		pollen.dead(i);
                       
         	}
         }
	}

}

//big small collision
function bigsmallcollision()
{
         
        var l=calLength2(bigbutterfly.x,bigbutterfly.y,smallbutterfly.x,smallbutterfly.y)
        if (l<900) 
        {
                
                smallbutterfly.smallbodyCount=0;
               
        }

}