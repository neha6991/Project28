class Elastic{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = body;
        this.pointB = anchor;
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }
    attach(body){
		this.elastic.bodyA=body;
	}
    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
