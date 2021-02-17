class Sling {

    constructor(bodyA,bodyB){
        var options = {
        
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.7,
            length:100

        }
    this.sling=Matter.Constraint.create(options)  
   World .add(world,this.sling);





}
display(){
    var posA=this.sling.bodyA.position
    var posB=this.sling.bodyB.position
    line(posA.x,posA.y,posB.x,posB.y);

}












}