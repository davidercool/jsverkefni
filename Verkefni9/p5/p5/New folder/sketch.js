var player1;
var player2;
var h = 1280;
var w = 720;

function setup() {
    noStroke();
    createCanvas(h, w);
    player1 = new Player(h/2-25, w/6);
    player2 = new Player(h/2-25, w/1.4);
}

function draw() {
    background(51);
    fill(255, 0, 0);
    player1.show();
    fill(0, 0, 255);
    player2.show();
}



function keyPressed() { // ef þú ýtir á takka
    if (keyPressed == "UP_ARROW") {
        player1.move(-1);
    }
    if (keyPressed == "DOWN_ARROW") {
        player1.move(1)
    }
    if (keyPressed == "LEFT_ARROW") {
        player1.move()
    }
    if (keyPressed == "UP_ARROW") {
        
    }
    if (keyPressed == " ") {
        
    }
    
    if (keyPressed == "A") {
        
    }
    if (keyPressed == "D") {
        
    }
    if (keyPressed == "W") {
        
    }
    if (keyPressed == "S") {
        
    }
}