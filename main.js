noseX = 0;
noseY = 0;
function preload(){
 yellowEye = loadImage('https://i.postimg.cc/NF4JPfqm/yellow-eye-removebg-preview.png');
}
function setup()
{
    canvas = createCanvas(400, 315);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 315);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet foi inicializado');
}
function draw(){
    image(video, 0, 0, 400, 315);
    image(yellowEye, noseX + 1, noseY - 80, 90, 90);
}
function takeSnapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
if (results.length > 0) 
  {
    console.log(results);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("nariz x = " + results[0].pose.nose.x);
    console.log("nariz y = " + results[0].pose.nose.y);
  }
}