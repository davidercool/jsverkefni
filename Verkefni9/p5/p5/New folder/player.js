function Player(x, y) {
    this.x = x;
    this.y = y;
    this.s = 50;
    
    this.show = function() {
        rect(this.x, this.y, this.s, this.s);
    }
}