function preload()
{

}
function setup()
{
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    fill("purple");
    rect(0,0,500,150);
    fill("black");
    rect(0,150,500,150);
    fill("magenta");
    rect(0,0,80,80);
    rect(420,0,80,80);
    rect(0,220,80,80);
    rect(420,220,80,80);
    image(video,20,20,460,260);

}