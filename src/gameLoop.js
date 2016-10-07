var lastTime=0;

var frame = 0;

function update(dt){
  if(keys.left){
    hero.moveLeft(dt);
  }
  if(keys.right){
    hero.moveRight(dt);
  }
  if(keys.fire){
    bullets.push(hero.fire());
    keys.fire = false;
  }

  martians.forEach(function(martian){
    martian.update(dt);
  });

  bullets.forEach(function(bullet){
    bullet.update(dt);
  });

  // random fire every 40 frames;
  if(frame%180==0&&martians.length>0){
    var martianIndex = Math.floor(Math.random()*martians.length);
    var bullet = martians[martianIndex].fire();
    bullets.push(bullet);
  }

  //detect collisions
  bullets.forEach(function(bullet, bulletIndex){
    if(!bullet.enemy){
      martians.forEach(function(martian, martianIndex){
        if(bullet.x>martian.x&&bullet.x<martian.x+martianSize&&
           bullet.y>martian.y+martianAdvantage&&bullet.y<martian.y+martianSize+martianAdvantage){
          martians.splice(martianIndex, 1);
          bullets.splice(bulletIndex, 1);
          martianSpeed+=2.5;
        }
      });
      return;
    }


  });

}

function draw(){
  ctx.clearRect(0, 0, width, height);
  hero.draw(ctx);

  martians.forEach(function(martian){
    martian.draw(ctx);
  });

  bullets.forEach(function(bullet){
    bullet.draw(ctx);
  });
}


function loop(t){
  dt = t-lastTime;
  lastTime = t;

  update(dt/1000);
  draw();
  frame++;

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);