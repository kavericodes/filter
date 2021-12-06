sunx = 0;
suny = 0;

function preload(){
    bow = loadImage("https://i.postimg.cc/LX6yJ22z/image-processing20200424-29859-b5uux6-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        sunx = results[0].pose.nose.x-40;
        suny = results[0].pose.nose.y-130;
        console.log("sun x = " + sunx);
        console.log("sun y = "+ suny);
    }
}

function modelLoaded(){
    console.log("PoseNet is Loaded!")
}

function draw(){
    image(video,0,0,450,450);
    image(sun,sunx,suny,90,75)
}

function takeSnapshot(){
    save("sunhatfilter.jpg")
}