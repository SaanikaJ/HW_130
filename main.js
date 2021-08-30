var leftWrist_x = 0; 
var leftWrist_y = 0; 

var rightWrist_x = 0;
var rightWrist_y = 0; 

var score_wrist = 0;

song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("History.mp3");
    song2 = loadSound("Story of my Life.mp3");
}

function setup(){
    canvas = createCanvas(450, 450); 
    canvas.center(); 

    video = createCapture(VIDEO); 
    video.hide(); 

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on("pose", gotPoses); 
}

function draw(){
    image(video, 0, 0, 450, 450); 

    
}

function modelLoaded(){
    console.log("Model loaded!"); 
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        score_wrist = results[0].pose.keypoints[9].score; 
        console.log("Score of left wrist = " + score_wrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("Left Wrist x = " + leftWrist_x + ", Left Wrist y = " + leftWrist_y); 

        rightWrist_x = results[0].pose.rightWrist.x; 
        rightWrist_y = results[0].pose.rightWrist.y; 
        console.log("Right wrist x = " + rightWrist_x + ", Right Wrist y = " + rightWrist_y);
    } 
} 