function Bullet(x, y) {
    this.x = x;
    this.y = y;
    
    this.show = function() {
        noStroke();
        fill(150, 0, 255);
        rect(this.x, this.y, 10, 20);
    }
    
    this.move = function() {
        this.y = this.y - 5;
    }
}