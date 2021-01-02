function preload(){

}

function setup(){
  canvas = createCanvas(500 , 400)
  canvas.center()
  video = createCapture(VIDEO)
  video.size(500 , 400)
  video.hide()
  
  poseNet = ml5.poseNet(video,modelloaded)
  poseNet.on("pose",gotposes)
  
}
function draw(){
  image(video,0,0,500,400)  
}
function take_snap(){
    save("mypicture.png")
}

function modelloaded(){
  console.log("Model loading")
}
function gotposes(results){
   if (results.length>0){
     console.log(results)
     console.log("Nose X = " + results[0].pose.nose.x)
     console.log("Nose Y = " + results[0].pose.nose.y)
   }
}