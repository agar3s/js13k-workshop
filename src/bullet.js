
function Bullet(x, y, enemy){
  this.x = x;
  this.y = y;
  this.enemy = enemy;

  this.draw = function(ctx){
    if(enemy){
      ctx.fillStyle='#3f3';
    } else{
      ctx.fillStyle='#fff';
    }
    ctx.fillRect(this.x, this.y, 3,15);
  }

  this.update = function(dt){
    if(enemy){
      this.y+=dt*100;
    }else{
      this.y-=dt*200;
    }
  }
}