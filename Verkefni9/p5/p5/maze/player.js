function Player(current) {
    this.health = 0;
    this.current = current;
    
    this.move = function(i, j, dir) {
        if (dir === "right") {
            current = grid[index(i+1,j)];
            console.log("after", current)
        } else if (dir === "left") {
            current = grid[index(i-1,j)];
        } else if (dir === "up") {
            current = grid[index(i,j-1)];
        } else if (dir === "down") {
            current = grid[index(i,j+1)];
        }
    }
}