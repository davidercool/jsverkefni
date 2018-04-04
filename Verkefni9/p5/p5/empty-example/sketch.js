var ship;
var enemy = [];
var bullet = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    //bullet2 = new Bullet(width/2, height/2);
    for (var i = 0; i < 6; i++) {
        enemy[i] = new Enemy(i*55+30, 40);
    }
}

function draw() {
    background(51);
    ship.show();

    
    for (var i = 0; i < bullet.length; i++) {
        bullet[i].show();
        bullet[i].move();
    }
    
    for (var i = 0; i < enemy.length; i++) {
        enemy[i].show();
    }
}

function keyPressed() {
    if (key === ' ') {
        var bullets = new Bullet(ship.x, ship.y);
        bullet.push(bullets);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-1);
    }
}