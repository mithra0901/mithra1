class poly{
    constructor(bodyA, pointB,){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
           
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        
        this.poly = Constraint.create(options);
        World.add(world, this.poly);
    }
fly(){
    this.poly.bodyA=null
}

    display(){
        var pointA = this.poly.bodyA.position;
        var pointB = this.pointB;
        
        if(this.poly.bodyA){
            
        
        push();
        strokeWeight(7);
        stroke(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
  
    if(pointA.x<210){
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
       
    }else{
        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
       
        
    }
    pop();
    