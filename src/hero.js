
function Hero(x, y){
  this.x = x;
  this.y = y;
  this.speed = 120;
  this.size = 20;

  this.draw = function(ctx){
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fill();
  }

  this.fire = function(){
    play(fireSound);
    return new Bullet(this.x, this.y, false);
  }

  this.moveLeft = function(dt){
    this.x-=dt*this.speed;
  }

  this.moveRight = function(dt){
    this.x+=dt*this.speed;
  }
}