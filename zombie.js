var zombie = $("#zombie");
var player = $("#player");
$(document).ready(function(){
    
  
    let playerX = parseInt(player.css("cx"),10);
    let playerY = parseInt(player.css("cy"),10);
    let zombieX = parseInt(zombie.css("cx"),10);
    let zombieY = parseInt(zombie.css("cy"),10);

    $(document).keydown(function(){
        
        playerX = parseInt(player.css("cx"),10);
        playerY = parseInt(player.css("cy"),10);
        console.log("x: "+playerX+ " y: "+playerY);

        zombieX = parseInt(zombie.css("cx"),10);
        zombieY = parseInt(zombie.css("cy"),10);

        if(playerX > zombieX){
            console.log("playerX: " + playerX +" zombieX: "+zombieX+" decision right");
            right(zombie, 50);
            
        }
        else
        {
            console.log("playerX: " + playerX +" zombieX: "+zombieX+" decision left");
            left(zombie, 50);
        }
        if(playerY > zombieY){
            console.log("playerY: " + playerY +" zombieY: "+zombieY+" decision down");
            down(zombie, 50);
        }
        else
        {
            console.log("playerY: " + playerY +" zombieY: "+zombieY+" decision up");
            up(zombie, 50);
        }
    });

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function upRight(actor, dxy)
  {
      console.log(actor);
      for(let i = 0; i < dxy; i++)
      {
            actor.css("cx", "+=1px");
            actor.css("cy", "-=1px");
            await sleep(moveDelay);
      }
      
  }
  async function downRight(actor, dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              actor.css("cx", "+=1px");
              actor.css("cy", "+=1px");
              await sleep(moveDelay);
      }
      
  }
  async function downLeft(actor, dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              actor.css("cx", "-=1px");
              actor.css("cy", "+=1px");
              await sleep(moveDelay);
      }
      
  }
  async function upLeft(actor, dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              actor.css("cx", "-=1px");
              actor.css("cy", "-=1px");
              await sleep(moveDelay);
      }
      
  }

async function left(actor, dx)
{
    for(let i = 0; i < dx; i++)
    {
            actor.css("cx", "-=1px");
            await sleep(moveDelay);
    }
    
}

async function right(actor, dx)
{
    for(let i = 0; i < dx; i++)
    {
            actor.css("cx", "+=1px");
            await sleep(moveDelay);
    }
    
}

async function up(actor, dy)
{
    for(let i = 0; i < dy; i++)
    {
            actor.css("cy", "-=1px");
            await sleep(moveDelay);
    }
    
}

async function down(actor, dy)
{
    for(let i = 0; i < dy; i++)
    {
            (actor).css("cy", "+=1px");
            await sleep(moveDelay);
    }
    
} 
});