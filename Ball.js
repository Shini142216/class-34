class Ball{

constructor(x,y,radius){
    var options = { 
        density: 1};
    this.body=Matter.Bodies.circle(x,y,radius);
    this.x=x;this.y=y;this.radius=radius;
    World.add(world,this.body)
}
display(){
    push()
translate (this.body.position.x,this.body.position.y);
rotate (this.body.angle)
ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius)
pop ()
}

}