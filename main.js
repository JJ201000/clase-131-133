img="";
statusc="";
objectDetector="";
objectS=[];



function preload()
{
    img= loadImage('dog_cat.jpg');
}

function setup()
{

canvas = createCanvas(450, 450);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("mario").innerHTML="detectando cosas";

}

function draw()
{
   image(img, 0 , 0 , 450 , 450);
   if (statusc != "") 
   {
    for ( i = 0; i<objectS.length; i++)
    {
   document.getElementById("mario").innerHTML="status:objetos decectados";


   fill("#FF0000");
   percent=floor(objectS[i].confidence * 100)
    text(objectS[i].label + " " + percent + "%", objectS[i].x + 15 , objectS[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objectS[i].x , objectS[i].y , objectS[i].width , objectS[i].haight);
}
}
}
function modelLoaded(){
    console.log("ha cargado el modelo con exito haora es hora de morir tin")
    statusc=true;
    objectDetector.detect(img, gotResult);

}
function gotResult(error,results)
{
    if (error){
        console.log(error);
    }
    console.log(results)
}