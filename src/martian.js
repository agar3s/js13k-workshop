
function Martian(x, y, sprite){
  this.x = x;
  this.y = y;
  this.sprite = sprite;

  this.draw = function(ctx){
    if(martianLoaded){
      ctx.drawImage(spriteSource, 10+30*sprite, 10, 20, 20, this.x, this.y+martianAdvantage, martianSize, martianSize);
    }
  }

  this.fire = function(){
    return new Bullet(this.x, this.y+martianAdvantage, true);
  }

  this.update = function(dt){
    if(martiansToLeft){
      this.x-=dt*martianSpeed;
      if(this.x<0){
        martiansToLeft=false;
        martianAdvantage+=martianSize*1.2;
      }
    }else{
      this.x+=dt*martianSpeed;
      if(this.x>width-martianSize){
        martiansToLeft=true;
        martianAdvantage+=martianSize*1.2;
      }
    }
  }
}