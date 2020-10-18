canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var roverWidth=100;
var roverHeight=90;

var roverX=10;
var roverY=10;

images=["1.jpg","2.jpg","3.jpg","4.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log (randomNumber);

background_image=images[randomNumber];
rover_image="rover.png";

function add(){
     bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;


     rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keyPress=e.keyCode;
    console.log (keyPress);

    if(keyPress=='37'){
        left();
        console.log ("left key is pressed");
    }

    if(keyPress=='38'){
        up();
        console.log ("up key is pressed");
    }

    if(keyPress=='39'){
        right();
        console.log ("right key is pressed");
    }

    if(keyPress=='40'){
        down();
        console.log ("down key is pressed");
    }
}

function up(){
    if(roverY >0){
        roverY=roverY-10;
        console.log ("when up arrow is pressed x= "+roverX+" and y= "+roverY);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(roverY <=500){
        roverY=roverY+10;
        console.log ("when down is pressed x= "+roverX+" and y= "+roverY);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(roverX >0){
     roverX=roverX-10;
     console.log ("when left is pressed x= "+roverX+" and y= "+roverY);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(roverX <=700){
        roverX=roverX+10;
        console.log ("when right is pressed x= "+roverX+" and y= "+roverY);
        uploadbackground();
        uploadrover();
    }

}