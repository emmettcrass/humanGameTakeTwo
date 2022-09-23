class Sprite
{
//this file holds gameObjects and animations


	constructor(config)
	{

		//set up images
		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () =>
		{
			this.isLoaded = true;
		}

		//shadow
		this.shadow = new Image();
		this.useShadow = true; //config.useShadow || false
		if (this.useShadow)
		{
			this.shadow.src = "/assets/imgs/chars/glow.png";
		}

		this.shadow.onload = () =>
		{
			this.isShadowLoaded = true;
		}

		//config animation and init state
		this.animations = config.animations ||
		{
			"idle-down": [
				[0, 0],
			],
			"idle-right": [
				[4, 2],
				[0, 3],
				[1, 3],
				[2, 3],
				[3, 3],
				[4, 3],
				[0, 4],
				[1, 4],
				[2, 4],
				[3, 4],
				[4, 4],
				[0, 5],
			],
			"idle-up": [
				[0, 0],
			],
			"idle-left": [
				[1, 0],
				[2, 0],
				[3, 0],
				[4, 0],
				[0, 1],
				[1, 1],
				[2, 1],
				[3, 1],
				[4, 1],
				[0, 2],
				[1, 2],
				[2, 2],
				[3, 2],
			],
			"walk-down": [
				[1, 5],
				[2, 5],
				[3, 5],
				[4, 5],
				[0, 6],
			],
			"walk-right": [
				[1, 7],
				[2, 7],
				[3, 7],
				[4, 7],
				[0, 8],
			],
			"walk-up": [
				[1, 8],
				[2, 8],
				[3, 8],
				[4, 8],
			],
			"walk-left": [
				[1, 6],
				[2, 6],
				[3, 6],
				[4, 6],
				[0, 7],
			]
		}

		this.currentAnimation = "idle-right"; // config.currentAnimation || "idle-down";
		this.currentAnimationFrame = 0;

		this.animationFrameLimit = config.animationFrameLimit || 13;
		this.animationFrameProgress = this.animationFrameLimit;
		//ref game obj
		this.gameObject = config.gameObject;
	}

	get frame()
	{
		return this.animations[this.currentAnimation][this.currentAnimationFrame]
	}

	setAnimation(key)
	{
		if (this.currentAnimation !== key)
		{
			this.currentAnimation = key;
			this.currentAnimationFrame = 0;
			this.animationFrameProgress = this.animationFrameLimit;
		}
	}

	updateAnimationProgress()
	{
		//downtick frame progress
		if (this.animationFrameProgress > 0)
		{
			this.animationFrameProgress -= 1;
			return;
		}
		//reset counter
		this.animationFrameProgress = this.animationFrameLimit;
		this.currentAnimationFrame += 1;

		if (this.frame === undefined)
		{
			this.currentAnimationFrame = 0
		}
	}

	draw(ctx, cameraPerson)
	{
		const x = this.gameObject.x - 40 + utils.withGrid(6.5) - cameraPerson.x;
		const y = this.gameObject.y - 89 + utils.withGrid(7.5) - cameraPerson.y;

		this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

		const [frameX, frameY] = this.frame;

		this.isLoaded && ctx.drawImage(
			this.image,
			frameX * 179, frameY * 196,
			179, 196,
			x, y,
			179, 196,
		)

		this.updateAnimationProgress();
	}

}