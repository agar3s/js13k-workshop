
var keys = {
  left: false,
  right: false,
  fire: false
};

document.onkeydown = function(e){
  var key = e.keyCode || e.which;
  if(key==65||key==37){
    keys.left = true;
  }
  if(key==68||key==39){
    keys.right = true;
  }
  if(key==32){
    keys.fire = false;
  }
}

document.onkeyup = function(e){
  var key = e.keyCode || e.which;
  if(key==65||key==37){
    keys.left = false;
  }
  if(key==68||key==39){
    keys.right = false;
  }
  if(key==32){
    keys.fire = true;
  }
}