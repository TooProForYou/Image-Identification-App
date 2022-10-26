img = " ";

function setup()
{
    canvas = createCanvas(620,420);
    canvas.center();
}

function preload()
{
    img = loadImage("bottle.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#4385f7");
    text("Bottle", 251, 51);
    noFill();
    stroke("#4385f7");
    rect(244, 36, 65, 370);

    stroke("#bb43f7");
    text("Glass", 392, 242.5);
    rect(387, 230, 70, 186);

    stroke("#ff0080");
    text("Bottle", 297, 16);
    rect(294, 3, 105, 410);
}