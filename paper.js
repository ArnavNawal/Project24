class Paper{
    constructor(x,y,radius)
    {
        var options ={
            isStatic : false,
            'friction': 0.3,
            'density': 1.2,
            'restitution' : 0.3
        };
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        fill("pink")

    }
    display(){
        push();
        //translate(pos.x, pos.y);
        
        ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 15,15);
        
        stroke("green");
        fill(255);
        //rect(0, 0, this.width, this.height);
        pop();
      }
    };

