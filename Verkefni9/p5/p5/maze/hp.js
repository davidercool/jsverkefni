function hp() {
    this.current = current;
    this.r = w/2;
    this.w = w;

    this.hp = function() {
        if (current == this.cellnumber) {
            text("GameOver");
        }
    }
    
    this.show = function(healthPickups) {
        for (var x = 0; x < bombs.length; x+=2) {
            fill(0, 255, 0, 100);
            ellipse(healthPickups[x]*this.w+this.r, healthPickups[x+1]*this.w+this.r, this.r, this.r)
        }
    }
}