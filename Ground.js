class Ground{

    constructor(x,y,width,height){
var options={isStatic:true}
this.ground=Matter.Bodies.rectangle(x,y,width,height,options);
this.x=x;this.y=y;
this.width=width;this.height=height;
World.add(world,this.ground)
    }
display(){
rectMode(CENTER)
fill("brown")
rect(this.ground.position.x,this.ground.position.y,this.width,this.height)


}


}
