var canvas = new fabric.Canvas('myCanvas');

block_image_width= 50;
block_image_height= 50;

playerX = 7;
PlayerY = 7;

var player_object="";


function new_image()
{

    fabric.Image.fromURL('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', function(Img){
        block_image_object= Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
        top:0,
        left:0

    });
    });
}
function playSound(){
    music.play();
    var music= document.getElementById("music");
}


