var moveDistance = 50;
var moveDelay = 10;
var player = $("#player");

$(document).ready(function(){

    $("#left").click(function(){
        left(player, moveDistance);
    });

    $("#up").click(function(){
        up(player, moveDistance);
    });

    $("#right").click(function(){
        right(player, moveDistance);
    });

    $("#down").click(function(){
        down(player, moveDistance);
    });

    let keysDown = {
        a: false,
        d: false,
        w: false,
        s: false
    };
    
    // check if a key is released
    $(document).keyup(function(e){
        // fire on 'a'
        if (e.keyCode==65)
        {
            keysDown.a = false;
        }
        // fire on 'd'
        if (e.keyCode==68)
        {
            keysDown.d = false;
        }
        // fire on 'w'
        if (e.keyCode==87)
        {
            keysDown.w = false;
        }
        // fire on 's'
        if (e.keyCode==83)
        {
            keysDown.s = false;
        }
    });

    $(document).keydown(function(e){
        // fire on 'a'
        if (e.keyCode==65)
        {
            keysDown.a = true;
        }
        // fire on 'd'
        if (e.keyCode==68)
        {
            keysDown.d = true;
        }
        // fire on 'w'
        if (e.keyCode==87)
        {
            keysDown.w = true;
        }
        // fire on 's'
        if (e.keyCode==83)
        {
            keysDown.s = true;
        }

        moveCommand(keysDown);

    });

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function moveCommand(keysDown)
  {
     // key combinations
     if(keysDown.w && keysDown.d)
     {
         upRight(player, moveDistance);
         return;
     }
     
     if(keysDown.s && keysDown.d)
     {
         downRight(player, moveDistance);
         return;
     }
     
     if(keysDown.s && keysDown.a)
     {
         downLeft(player, moveDistance);
         return;
     }
     
     if(keysDown.w && keysDown.a)
     {
         upLeft(player, moveDistance);
         return;
     }

     //single keys
     if(keysDown.a)
     {
         left(player, moveDistance);
         return;
     }

     if(keysDown.d)
     {
         right(player, moveDistance);
         return;
     }

     if(keysDown.w)
     {
         up(player, moveDistance);
         return;
     }

     if(keysDown.s)
     {
         down(player, moveDistance);
         return;
     }

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
