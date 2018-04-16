var ship;
var enemy = [];
var bullets = [];
var score = 0;

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        enemy[i] = new Enemy(i*55+30, 40);
    }
    bullets = []
}

function draw() {
    background(51);
    ship.show();
    ship.move();
    textSize(35)
    text("score:", 10, 30)
    text(score, 110, 32)
    for (var i = 0; i < bullets.length; i++) {  // sýnir og hreyfir bullets
        bullets[i].show();
        bullets[i].move();
        for (var j = 0; j < enemy.length; j++) {  // hit detection
            if (bullets[i].hits(enemy[j])) {
                enemy[j].kill()
                bullets[i].kill()
            }
        }
    }
    var edge = false;   //endinn á skjánum
    
    for (var i = 0; i < enemy.length; i++) {    // býr til óvini og lætur þá hreyfast
        enemy[i].show();
        enemy[i].move();
        
        if (enemy[i].x > width || enemy[i].x < 0) { // ef óvinir fara að endanum
            edge = true
        }
    }
    
    if (edge) {         // ef óvinir fara að endanum á skjánum fara þeir niður
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].shiftDown();
        }
    }
    
    for (var i = bullets.length-1; i >= 0; i--) { // eyðir skotum þegar þau hitta óvini
        if (bullets[i].toDelete) {
            bullets.splice(i, 1);
            score+=10
        }
    }
    for (var i = enemy.length-1; i >= 0; i--) { // eyðir óvinum þegar ég hitti þá
        if (enemy[i].toDelete) {
            enemy.splice(i, 1);
        }
    }
    
    if (enemy.length == 0) {
        setup();
        enemy.xdir+=1
    }
}

function keyReleased() {  // ef þú sleppir takkanum þá stoppar playerinn
    if (key != ' ') {
    ship.setDir(0);
    }
}

function keyPressed() { // ef þú ýtir á takka
    if (key === ' ') {      //spacebar skýtur
        var bullet = new Bullet(ship.x, height);
        bullets.push(bullet);
        console.log(bullets)
    }
    if (keyCode === RIGHT_ARROW) {  // right færir þig til hægri
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) { // left færir þig til vinstri
        ship.setDir(-1);
    }
}