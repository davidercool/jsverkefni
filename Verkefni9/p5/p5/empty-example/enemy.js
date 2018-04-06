function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.toDelete = false;
    this.xdir = 1;
    
    this.kill = function() {
        this.toDelete = true;
    }
    
    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }
    
    this.show = function() {
        fill(255, 0, 200);
        rect(this.x, this.y, this.r*2, this.r*2);
    }
    
    this.move = function() { // auto movement fyrir óvini
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
    }
}