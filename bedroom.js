img = " ";

function setup()
{
    canvas = createCanvas(620,420);
    canvas.center();
}

function preload()
{
    img = loadImage("bedroom.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#4385f7");
    text("Door", 5, 65);
    noFill();
    stroke("#4385f7");
    rect(0, 50, 250, 370);

    stroke("#bb43f7");
    text("TV", 505, 185);
    rect(500, 170, 200, 210);

    stroke("#ff0080");
    text("AC", 253, 61);
    rect(250, 50, 190, 80);
}