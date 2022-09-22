//where i put code i copy but do not need to paste right away

//character time//

const x = 5;
const y = 6;

const shadow = new Image();
shadow.onload = () => {
    this.ctx.drawImage(
        shadow,
        0, //left cut
        0, //top cut
        32, //width of cut
        32,//cut height
        x * 16 - 8, //where player starts on screen
        y * 16 - 18,
        32, //player size or resized here
        32,
        )
};
shadow.src = "/images/characters/shadow.png";

const hero = new Image();
hero.onload = () => {
    this.ctx.drawImage(
        hero,
        0, //left cut
        0, //top cut
        32, //width of cut
        32,//cut height
        x * 16 - 8, //where player starts on screen
        y * 16 - 18,
        32, //player size or resized here
        32,
        )
};

hero.src = "/images/characters/people/hero.png";



//---------



      //bkgd time//
      const image = new Image();
      image.onload = () => {
          this.ctx.drawImage(image,0,0)
      };

      image.src = "/images/maps/DemoLower.png";

      const hero = new GameObject({
          x: 5,
          y: 6,
          src: "/images/characters/people/hero.png"
      })
      const npc1 = new GameObject({
          x: 7,
          y: 9,
          src: "/images/characters/people/npc1.png"
      })
      
      setTimeout(() => {
          hero.sprite.draw(this.ctx);
          npc1.sprite.draw(this.ctx);
      }, 200)
