class Dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
        this.leftbody=Bodies.rectangle(1045, 350,20,100, options)
        this.rightbody=Bodies.rectangle(955,350,100,20, options)
        this.centerbody=Bodies.rectangle(x, y-60,150,40, options)
        this.image=loadImage("dustbingreen.png",options);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.centerbody);

	}
	display()
	{
			
				

			
			push();
			rectMode(CENTER)
		
			fill('green')
            imageMode(CENTER);
           
            image(this.image,this.centerbody.position.x,this.centerbody.position.y-50,100, 100)
            rect(this.leftbody.position.x,this.leftbody.position.y,2,100)
            rect(this.rightbody.position.x,this.rightbody.position.y,2,100)


		    pop();
			
	}

}