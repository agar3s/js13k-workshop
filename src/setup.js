
var ctx = c.getContext('2d');
var width = 600;
var height = 800;

c.width = width;
c.height = height;

var hero = new Hero(width*0.5,height*0.9);
var fireSound = audio([0,,0.12,0.14,0.3,0.8,,-0.3399,0.04,,,-0.04,,0.51,-0.02,,-0.74,,0.21,0.24,,,0.02,0.41]);

var martians = [];
var lines = 5; // martian enemy lines
var martianPerLine = 11;
var martianSize = 30;
var martiansToLeft = false;
var martianAdvantage = 0;
var martianSpeed = 20;
var martianLoaded = false;

for (var i = 0; i < lines*martianPerLine; i++) {
  var x = (i%martianPerLine)*((width-martianSize*4)/martianPerLine)+martianSize*2.5;
  var y = Math.floor(i/martianPerLine)*(martianSize*1.5)+200;
  var martian = new Martian(x+(i/martianPerLine)*2, y, Math.floor(i/martianPerLine)%3);
  martians.push(martian);
};

var bullets = [];

var spriteSource = new Image();

spriteSource.onload = function() {
  martianLoaded = true;
};
spriteSource.src = 'sprites.png';