Status = "";
fruits_image = "";
object = [];
function preload(){
    fruits_image = loadImage("fruits.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center()
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    //document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fruits_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fruits_image,0,0,650,420);
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