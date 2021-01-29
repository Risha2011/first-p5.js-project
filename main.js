function preload(){
}

function setup(){
    canvas = createCanvas(1000,600);
    canvas.position(220,220);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 220, 60, 500, 470);
}

function take_snapshot(){
    save('student_name.png');
}