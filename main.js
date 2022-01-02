function setup(){
    canvas = createCanvas(720, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 150, 75, 400, 250);
    fill(10, 101, 190, 127);
  stroke(137, 63, 120);
    circle(730, 410, 200, 200);
    circle(730, 0, 200, 200);
    circle(0, 0, 200, 200);
    circle(0, 410, 200, 200);
}
function take_snapshot(){
    save('picture.png');
}