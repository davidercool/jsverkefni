var cols, rows;
var w = 120;
var grid = [];
var iterator = 0;
var current;
var bombs = [];
var healthPickups = [];
var stack = [];
var player;
var generate = true;

function setup() {
    frameRate(1000);
    createCanvas(1920, 1080);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    //console.log("overwrite4");
    var player = new Player();
    current = grid[0];
}

function draw() {
    if (generate) {
        player = new Player(current);
        //console.log("overwrite3");
    }
    var bomb = new Bomb();
    var healthPickup = new hp();
    background(51);
    current.visited = true;
            for (var i = 0; i < grid.length; i++) {
            grid[i].show();
        }

    
    var next = current.checkNeighbours();
    current.highlight();
    if (next) {
        
        next.visited = true;
        
        stack.push(current);
        
        removeWalls(current, next);
        //console.log("overwrite2");
        current = next;
        iterator+=1;
        if (iterator % 50 == 10) {
            healthPickups.push(current.i, current.j);
        }
        if (iterator % 50 == 0) {
            bombs.push(current.i, current.j);
        }
    } else if (stack.length > 0) {
        //console.log("overwrite1");
        current = stack.pop();
        iterator+=1;
        
    } else {   //þegar maze er tilbúið
        console.log(bombs)
        current = player.current;
        if (current == 0) {
            bomb.explode
        }
        generate = false;
        bomb.show(bombs);
        healthPickup.show(healthPickups);
        for (var i = 0; i < grid.length; i++) {
            //grid[i].show();
            player.current.highlight();
        }
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
        return -1;
    }
    
    return i + j * cols;
}

function removeWalls (a, b) {
    var x  = a.i - b.i;
    if (x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y == 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y == -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function keyPressed() { // ef þú ýtir á takka
    if (keyCode === RIGHT_ARROW && current.walls[1] == false) { 
        console.log("right")
        player.move(current.i, current.j, "right")
    }  
    if (keyCode === LEFT_ARROW && current.walls[3] == false) { 
        console.log("left")
        player.move(current.i, current.j, "left")
    } 
    if (keyCode === DOWN_ARROW && current.walls[2] == false) { 
        console.log("down")
        player.move(current.i, current.j, "down")
    }
    if (keyCode === UP_ARROW && current.walls[0] == false) { 
        console.log("up")
        player.move(current.i, current.j, "up")
    }
}