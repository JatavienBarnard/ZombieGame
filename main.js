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
