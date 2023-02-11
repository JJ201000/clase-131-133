img="";
statusc="";




function preload()
{
    img= loadImage('dog_cat.jpg');
}

function setup()
{

canvas = createCanvas(450, 450);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="detectando cosas";

}

function draw()
{
    image(img, 0 , 0 , 450 , 450);
    fill("#FF0000");
    text("perro", 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(50,60 , 200 , 200);

    fill("#05f0c1");
    text("gato", 110 , 110);
    noFill();
    stroke("#05f0c1");
    rect(100 , 100 , 200 , 200);
}
function modelLoaded(){
    console.log("ha cargado el modelo con exito haora es hora de morir tin")
    statusc=true;
    objectDetector.detect(img, gotResult);
    
}
