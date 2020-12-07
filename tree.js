class Tree {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true
          
      }
      this.body = Bodies.rectangle(this.x, this.y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
	  this.y = y;
      this.image=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height)
      
    }
  };
  