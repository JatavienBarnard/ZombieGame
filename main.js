$(document).ready(function(){
    
    $("#left").click(function(){
        leftPlayer(50,0);
    });

    $("#up").click(function(){
        upPlayer(50);
    });

    $("#right").click(function(){
        rightPlayer(50);
    });

    $("#down").click(function(){
        downPlayer(50);
    });

    // check if a key is pressed
    $(document).keydown(function(e){
        // fire on 'a'
        if (e.keyCode==65)
        {
            leftPlayer(50);
        }
        // fire on 'd'
        if (e.keyCode==68)
        {
            rightPlayer(50);
        }
        // fire on 'w'
        if (e.keyCode==87)
        {
            upPlayer(50);
        }
        // fire on 's'
        if (e.keyCode==83)
        {
            downPlayer(50);
        }
    });

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function leftPlayer(dx)
{
    for(let i = 0; i < dx; i++)
    {
            $("#player").css("cx", "-=1px");
            await sleep(15);
    }
    
}

async function rightPlayer(dx)
{
    for(let i = 0; i < dx; i++)
    {
            $("#player").css("cx", "+=1px");
            await sleep(15);
    }
    
}

async function upPlayer(dy)
{
    for(let i = 0; i < dy; i++)
    {
            $("#player").css("cy", "-=1px");
            await sleep(15);
    }
    
}

async function downPlayer(dy)
{
    for(let i = 0; i < dy; i++)
    {
            $("#player").css("cy", "+=1px");
            await sleep(15);
    }
    
}
