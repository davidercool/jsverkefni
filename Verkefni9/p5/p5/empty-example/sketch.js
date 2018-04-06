var ship;
var enemy = [];
var bullets = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        enemy[i] = new Enemy(i*55+30, 40);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();
    
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        for (var j = 0; j < enemy.length; j++) {
            if (bullets[i].hits(enemy[j])) {
                enemy[j].kill()
                bullets[i].kill()
            }
        }
    }
    var edge = false;
    
    for (var i = 0; i < enemy.length; i++) {
        enemy[i].show();
        enemy[i].move();
        
        if (enemy[i].x > width || enemy[i].x < 0) {
            edge = true
        }
    }
    
    if (edge) {
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].shiftDown();
        }
    }
    
    for (var i = bullets.length-1; i >= 0; i--) { // eyðir skotum þegar þau hitta óvini
        if (bullets[i].toDelete) {
            bullets.splice(i, 1);
        }
    }
    for (var i = enemy.length-1; i >= 0; i--) { // eyðir óvinum þegar ég hitti þá
        if (enemy[i].toDelete) {
            enemy.splice(i, 1);
        }
    }
}

function keyReleased() {
    if (key != ' ') {
    ship.setDir(0);
    }
}

function keyPressed() {
    if (key === ' ') {
        var bullet = new Bullet(ship.x, height);
        bullets.push(bullet);
        console.log(bullets)
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}