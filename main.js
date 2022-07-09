function setup(){
    video = createCapture(VIDEO);
    video.size(560, 500);

    canvas = createCanvas(550, 500);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function draw(){
    background("#ADD8E6");
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
    }
}
