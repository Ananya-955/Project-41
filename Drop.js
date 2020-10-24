class Drop {
    constructor (x,y){
        var options={
            restitution:0.1,
            friction:0.01
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        //this.image=loadImage("paper.png");

        
        
        World.add(world, this.body);
      }
      update()
      {     
          if(this.body.position.y>height){
              Matter.Body.setPosition(this.body, {x:random(0,400), y: random(0,400)})
          }
       }
      display(){
        var pos =this.body.position;
        push();
        ellipseMode(CENTER);
       // imageMode(CENTER);
      //  image(this.image, pos.x,pos.y,40,40);
      //  translate(pos.x, pos.y);
      //  rotate(this.body.angle);
        //strokeWeight(5);
       // stroke("pink");
        fill("blue");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
      }
    };
