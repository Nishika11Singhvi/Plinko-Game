class particles
{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic : false,
            restitution : 0.5,
            friction : 0.4,
            density : 0.4
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = color(random(0,225), random(0,225), random(0,225))
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r);
        pop();
    }
}