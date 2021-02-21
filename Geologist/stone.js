class Stone {
    constructor(x, y) {
      var options = {
          'density': 5.0,
          'mass': 5.0,
          'friction': 0.5,
          'restitution': 0.1
      }
      this.width = 100;
      this.height = 50;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  