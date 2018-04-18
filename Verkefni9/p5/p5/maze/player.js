function Player(current) {
    this.health = 0;
    this.current = current;
    
    this.move = function(i, j, dir) {
        if (dir === "right") {
            this.current = grid[index(i+1,j)];
            console.log(current)
        } else if (dir === "left") {
            this.current = grid[index(i-1,j)];
            console.log(current)
        } else if (dir === "up") {
            this.current = grid[index(i,j-1)];
            console.log(current)
        } else if (dir === "down") {
            this.current = grid[index(i,j+1)];
            console.log(current)
        }
    }
}