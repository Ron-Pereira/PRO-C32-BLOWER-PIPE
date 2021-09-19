class Blower {
        constructor(x, y, w, h) {
                var options = {
                        isStatic: true
                };
                this.body = Bodies.rectangle(x, y, w, h, options)
                this.w = w;
                this.h = h;
                //this.image = loadImage("./assets/stone.png");
                World.add(world, this.body);
        }
        display() {
                var pos = this.body.position;
                //var angle = this.body.angle;
                push()
                translate(pos.x, pos.y);
                rectMode(CENTER);
                fill("brown");
                rect(0, 0, this.w, this.h)
                pop();
        }
}
