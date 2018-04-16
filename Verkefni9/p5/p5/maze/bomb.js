function Bomb() {
    this.current = current;
    this.r = w/2;

    this.explode = function() {
        if (current == this.cellnumber && player.health == 0) {
            text("GameOver");
        }
    }
    
    this.show = function(bombs) {
        for (var x = 0; x < bombs.length; x+2) {
            noStroke();
            fill(255, 0, 0, 100);
            //ellipse(bombs[x]*20, bombs[x+1]*20, this.r, this.r)
        }
    }
}