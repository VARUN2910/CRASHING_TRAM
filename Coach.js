class Coach{
  constructor(x,y,width,height){
    var options ={
      isStatic: false}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    Matter.Body.setMass(this.body,this.body.mass*5)
    this.width = width;
    this.height = height;
    this.image=loadImage("images/coach.png")
  }
  display()
  {
      imageMode(CENTER)
      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
  }


}
