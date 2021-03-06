class Sand {
    constructor(x, y) {
        var options = {
            'restitution': 0.3,
            'density': 1,
            'friction': 5.0
        }
        this.width = 10;
        this.body = Bodies.circle(x, y, this.width, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width);
        pop();
    }
};