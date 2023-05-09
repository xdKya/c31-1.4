class Navio {
  constructor(x, y, w, h, randomPos) {
    this.w = w;
    this.h = h;
    this.randomPos = randomPos;
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(world, this.body);
    this.image = loadImage("assets/boat.png");
  }

  show() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x,pos.y, this.w, this.h);
    pop();
  }
}
