const utils = {
    withGrid(n) {
      return n * 65;
    },
    asGridCoords(x,y) {
      return `${176*x},${176*y}`
    },
    nextPosition(initialX, initialY, direction) {
      let x = initialX;
      let y = initialY;
      const size = 176;
      if (direction === "left") { 
        x -= size;
      } else if (direction === "right") {
        x += size;
      } else if (direction === "up") {
        y -= size;
      } else if (direction === "down") {
        y += size;
      }
      return {x,y};
    }
    
  }