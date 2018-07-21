$(document).ready(function(){
    
    $("#player").click(function(){
        $("h1").hide();
        movePlayer(50,0);
    });
});

function movePlayer(dx, dy)
{
    for(let i = 0; i < dx; i++)
    {
        setTimeout(function(){
            $("#player").css("cy", "+=1px");
        }, 500);
    }
    
}