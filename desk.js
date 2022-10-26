img = " ";

function setup()
{
    canvas = createCanvas(620,420);
    canvas.center();
}

function preload()
{
    img = loadImage("desk.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#4385f7");
    text("Book", 5, 112);
    noFill();
    stroke("#4385f7");
    rect(0, 100, 400, 170);

    stroke("#bb43f7");
    text("Mobile Phone", 406, 292.5);
    rect(400, 280, 200, 110);

    stroke("#ff0080");
    text("Laptop", 251, 51);
    rect(244, 36, 355, 300);
}