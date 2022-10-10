leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 520);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialised...!!!");
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = leftWristX - rightWristX;

        console.log("left wrist x = " + leftWristX + " right wrist x = " + rightWristX + " difference = " + difference);
    }
}

function draw(){
    background('#E8EDDF');
    fill("#ad173a");
    stroke("#ad173a");
    textSize(difference);
    text("ARNAW", 50, 200);
}