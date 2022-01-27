status = "";

function preload(){
    img = loadImage("IMG_0414.jpg");
}

function setup(){
    canvas = createCanvas(700, 600);
    canvas.position(600, 300);
    object = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("cocossd is intialized");
    status = true;
    object.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}