class Box{

constructor(x,y,width,height){

    var box_option ={
        restitution: 1.0
    }

    this.body = Bodies.rectangle(x,y,width,height, box_option);
    World.add(world,this.body);
    this.width=width
this.height=height
}
display(){

    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);

}





}