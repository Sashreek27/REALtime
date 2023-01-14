nosex = 0;
nosey = 0;
leftWristx = 0;
rightWristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 130);

    Canvas = createCanvas(450, 450);
    Canvas.position(800, 150)

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);

}
function draw() {
    background("white");
    textSize(difference);
    fill("aqua");
    stroke("black");
    text("Sashreek", 50,400)
    document.getElementById("Size").innerHTML="Font size of the text will be - "+difference +"px";
}

function gotresult(results) {

    if (results.length > 0) {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
        console.log("Nose X = " + nosex + " Nose Y = " + nosey);
        console.log("Left Wrist X = " + leftWristx + " Right Wrist X = " + rightWristx);
        console.log("Difference" + difference);
    }
}
function modelloaded() {
    console.log("Posenet has been initialized");
}
