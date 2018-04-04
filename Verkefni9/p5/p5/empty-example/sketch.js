var ship;
var enemy = [];
var bullet = [];

function setup() {
    createCanvas(400, 400);
    ship = new Ship();
    bullet = new Bullet(width/2, height/2);
    for (var i = 0; i < 6; i++) {
        enemy[i] = new Enemy(i*55+30, 40);
    }
}

function draw() {
    background(51);
    ship.show();
    bullet.show();
    bullet.move();
    for (var i = 0; i < enemy.length; i++) {
        enemy[i].show();
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-1);
    }
}