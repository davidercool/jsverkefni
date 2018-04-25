function Bomb() {
    this.current = current;
    this.r = w/2;
    this.w = w

    this.explode = function() {
        if (current == this.cellnumber && player.health == 0) {
            player.health -= 1;
        }
        if (player.health == 0){
            text("GameOver", 50, 50)
        }
        
    }
    
    this.show = function(bombs) {
        for (var x = 0; x < bombs.length; x+=2) {
            fill(255, 0, 0, 100);
            ellipse(bombs[x]*this.w+this.r, bombs[x+1]*this.w+this.r, this.r, this.r)
        }
    }
}