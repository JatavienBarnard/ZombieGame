var moveDistance = 50;
var moveDelay = 10;


$(document).ready(function(){
    
    $("#left").click(function(){
        leftPlayer(moveDistance);
    });

    $("#up").click(function(){
        upPlayer(moveDistance);
    });

    $("#right").click(function(){
        rightPlayer(moveDistance);
    });

    $("#down").click(function(){
        downPlayer(moveDistance);
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
         upRightPlayer(moveDistance);
         return;
     }
     
     if(keysDown.s && keysDown.d)
     {
         downRightPlayer(moveDistance);
         return;
     }
     
     if(keysDown.s && keysDown.a)
     {
         downLeftPlayer(moveDistance);
         return;
     }
     
     if(keysDown.w && keysDown.a)
     {
         upLeftPlayer(moveDistance);
         return;
     }

     //single keys
     if(keysDown.a)
     {
         leftPlayer(moveDistance);
         return;
     }

     if(keysDown.d)
     {
         rightPlayer(moveDistance);
         return;
     }

     if(keysDown.w)
     {
         upPlayer(moveDistance);
         return;
     }

     if(keysDown.s)
     {
         downPlayer(moveDistance);
         return;
     }

  }

  async function upRightPlayer(dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              $("#player").css("cx", "+=1px");
              $("#player").css("cy", "-=1px");
              await sleep(moveDelay);
      }
      
  }
  async function downRightPlayer(dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              $("#player").css("cx", "+=1px");
              $("#player").css("cy", "+=1px");
              await sleep(moveDelay);
      }
      
  }
  async function downLeftPlayer(dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              $("#player").css("cx", "-=1px");
              $("#player").css("cy", "+=1px");
              await sleep(moveDelay);
      }
      
  }
  async function upLeftPlayer(dxy)
  {
      for(let i = 0; i < dxy; i++)
      {
              $("#player").css("cx", "-=1px");
              $("#player").css("cy", "-=1px");
              await sleep(moveDelay);
      }
      
  }

async function leftPlayer(dx)
{
    for(let i = 0; i < dx; i++)
    {
            $("#player").css("cx", "-=1px");
            await sleep(moveDelay);
    }
    
}

async function rightPlayer(dx)
{
    for(let i = 0; i < dx; i++)
    {
            $("#player").css("cx", "+=1px");
            await sleep(moveDelay);
    }
    
}

async function upPlayer(dy)
{
    for(let i = 0; i < dy; i++)
    {
            $("#player").css("cy", "-=1px");
            await sleep(moveDelay);
    }
    
}

async function downPlayer(dy)
{
    for(let i = 0; i < dy; i++)
    {
            $("#player").css("cy", "+=1px");
            await sleep(moveDelay);
    }
    
}
