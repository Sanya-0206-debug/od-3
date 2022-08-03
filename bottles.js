Status = "";
bottles_image = "";
object = [];
function preload(){
    bottles_image=loadImage("bottles.jpg");
}
function setup(){
    canvas =createCanvas(650,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelloaded);
    //document.getElementById('status').innerHTML = "Detecting Objects";
}
function modelloaded(){
    Status = 'true';
    objectdetector.detect(bottles_image,gotResults)
}
function gotResults(error,results){
    object = results;
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(bottles_image,0,0,650,420);
    if(Status != " "){
        for(var i = 0; i < object.length; i++){
            //document.getElementById('status').innerHTML = "Detected Objects";
            fill("#FF0000");
            noFill();
            stroke("#FF0000");
            rect(object[i].x , object[i].y , object[i].width , object[i].height);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
        }
    }
}