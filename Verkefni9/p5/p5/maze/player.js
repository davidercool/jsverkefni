function Player(current) {
    this.health = 1;
    this.current = current;
    
    this.move = function(i, j, dir) {
        if (dir === "right") {
            this.current = grid[index(i+1,j)];
            console.log(this.current)
        } else if (dir === "left") {
            this.current = grid[index(i-1,j)];
            console.log(this.current)
        } else if (dir === "up") {
            this.current = grid[index(i,j-1)];
            console.log(this.current)
        } else if (dir === "down") {
            this.current = grid[index(i,j+1)];
            console.log(this.current)
        }
    }
}