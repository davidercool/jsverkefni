function Enemy(x, y) {
    this.x = x;
    this.y = y;
    
    this.show = function() {
        fill(255, 0, 200);
        rect(this.x, this.y, 30, 30);
    }
}