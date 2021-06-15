class Particle {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
       this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }

};