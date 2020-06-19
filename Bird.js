class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.tarray = [];
  }

  display() {
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y];
      this.tarray.push(pos);
    }
    for(var i=0; i<this.tarray.length; i++){
      image(this.smoke, this.tarray[i][0], this.tarray[i][1]);
    }
  }
}
