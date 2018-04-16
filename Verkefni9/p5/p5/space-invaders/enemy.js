function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.r = 15;
    this.toDelete = false;
    this.xdir = 1;
    
    this.kill = function() {
        this.toDelete = true;
    }
    
    this.shiftDown = function() { // færir óvini niður
        this.xdir += 1;
        if (this.xdir % 2 == 0) {
            this.xdir = -this.xdir
        }
        console.log(this.xdir)
        this.y += this.r;
    }
    
    this.show = function() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
    this.move = function() { // auto movement fyrir óvini
        this.x = this.x + this.xdir;
    }
}