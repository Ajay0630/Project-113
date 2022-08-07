function preload(){}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(255, 204, 0);
    rect(55, 55, 55, 55, 20);
    rect(55, 425, 55, 55, 20);
    rect(585, 55, 55, 55, 20);
    rect(585, 425, 55, 55, 20);
    image(video, 110, 110, 450, 300);
}
function take_snapshot(){
    window.alert("Saving image...")
    save('ajaythedj.png');
}