class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {};
  
      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      // this.upperImage = new Image();
      // this.upperImage.src = config.upperSrc;
    }
  
    drawLowerImage(ctx, cameraPerson) {
      ctx.drawImage(
        this.lowerImage, 
        utils.withGrid(10.5) - cameraPerson.x, 
        utils.withGrid(6) - cameraPerson.y
        )
    }
  
    // drawUpperImage(ctx, cameraPerson) {
    //   ctx.drawImage(
    //     this.upperImage, 
    //     utils.withGrid(10.5) - cameraPerson.x, 
    //     utils.withGrid(6) - cameraPerson.y
    //   )
    // } 
  
    isSpaceTaken(currentX, currentY, direction) {
      const {x,y} = utils.nextPosition(currentX, currentY, direction);
      return this.walls[`${x},${y}`] || false;
    }
  
    mountObjects() {
      Object.values(this.gameObjects).forEach(o => {
  
        //TODO: determine if this object should actually mount
        o.mount(this);
  
      })
    }
  
    addWall(x,y) {
      this.walls[`${x},${y}`] = true;
    }
    removeWall(x,y) {
      delete this.walls[`${x},${y}`]
    }
    moveWall(wasX, wasY, direction) {
      this.removeWall(wasX, wasY);
      const {x,y} = utils.nextPosition(wasX, wasY, direction);
      this.addWall(x,y);
    }
  
  }
  
  window.OverworldMap = {
    BedRoom: {
      lowerSrc: "assets/imgs/bRoom/bedroom.png",
      // upperSrc: "/images/maps/DemoUpper.png",
      gameObjects: {
        grub: new Person({
          isPlayerControlled: true,
          x: utils.withGrid(5),
          y: utils.withGrid(6),
        }),
      },
      walls: {
        [utils.asGridCoords(7,6)] : true,
        [utils.asGridCoords(8,6)] : true,
        [utils.asGridCoords(7,7)] : true,
        [utils.asGridCoords(8,7)] : true,
      }
    },
    Transit: {
      lowerSrc: "/assets/imgs/class/class.png",
      // upperSrc: "/images/maps/KitchenUpper.png",
      gameObjects: {
        grub: new GameObject({
          x: 3,
          y: 5,
        }),
        npc2: new GameObject({
          x: 9,
          y: 6,
          src: "/assets/imgs/chars/teacher/teacherLs.png"
        }),
        npc3: new GameObject({
          x: 10,
          y: 8,
          src: "/assets/imgs/chars/teacher/teacherLs.png"
        })
      }
    },
    Classroom: {
      lowerSrc: "/images/maps/KitchenLower.png",
      // upperSrc: "/images/maps/KitchenUpper.png",
      gameObjects: {
        grub: new GameObject({
          x: 3,
          y: 5,
        }),
        knee: new GameObject({
          x: 9,
          y: 6,
          src: "/assets/imgs/chars/knee/kneeLs.png"
        }),
        npc3: new GameObject({
          x: 10,
          y: 8,
          src: "/assets/imgs/chars/teacher/teacherLs.png"
        })
      }
    },
    Bathroom: {
      lowerSrc: "/images/maps/KitchenLower.png",
      // upperSrc: "/images/maps/KitchenUpper.png",
      gameObjects: {
        grub: new GameObject({
          x: 3,
          y: 5,
        }),
        npc2: new GameObject({
          x: 9,
          y: 6,
          src: "/assets/imgs/chars/teacher/teacherLs.png"
        }),
        npc3: new GameObject({
          x: 10,
          y: 8,
          src: "/assets/imgs/chars/teacher/teacherLs.png"
        })
      }
    },
  }