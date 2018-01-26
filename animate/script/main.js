var app = playground({

  create: function() {
    element = document.getElementById("myCanvas");
    ctx = element.getContext('2d');

    // sine wave    
    width = 5
    height = 5
    x = 125;
    y = 225;
    angle = 0
    amplitude = 1

    for (var i = 10; i <= 1000; i=i+0.1) {      
      angle = (angle+0.01)%360;
      y = y+ amplitude*Math.cos(angle);      
      // ctx.fillRect(x+i,y,width,height);  
    }
    
    

  var img = document.createElement("img");
  img.src = "image/walkingdead.png";
  // Brandon_Sprite_Sheet.png //546x298
  // Golden-Athena-Sprite.png
  // Ken_Sprite.png

  var spriteWidth = 2000;//947;//490; 
  var spriteHeight = 312;//594;//800; 
  cols = 10
  rows = 1

  var width = spriteWidth/cols; 
  var height = spriteHeight/rows; 

  var curFrame = 0; 
  var frameCount = 10;

  var xx=0;
  var yy=0; 

  var srcX=0; 
  var srcY=0;  

  var speed = 12; 

  level = 0

  function updateFrame(){
    //Updating the frame index 
    curFrame = ++curFrame % frameCount; 

    if (curFrame == frameCount-1)
        level = ++level % rows;
    //Calculating the x coordinate for spritesheet 
    srcX = curFrame * width; 
  }

  var move = 10  
  function draw(){
    ctx.clearRect(0,0,600,600);
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    ctx.drawImage(img,srcX,srcY+level*height,width,height,xx+move,yy,width,height);
    move = (move +10)%300;
  }  

  setInterval(draw, 500)



// var img = document.createElement("img");
//   img.src = "img/player.png";
//   var spriteW = 24, spriteH = 30;
//   var move = 10
//   img.addEventListener("load", function() {
//     var cycle = 0;
//     setInterval(function() {
//       cx.clearRect(0, 0, 1000, 1000);
//       cx.drawImage(img,
//                    // source rectangle
//                    cycle * spriteW, 0, spriteW, spriteH,
//                    // destination rectangle
//                    move,               10, spriteW, spriteH);
//       cycle = (cycle + 1) % 8;
//       move = (move +10)%300;
//     }, 300);
//   });



    // function draw() {
    //   ctx.clearRect(10,10,600,600);
    // // Filled triangle
    //   ctx.beginPath();
    //   x=x+1;
    //   y=y+1;
    //   ctx.moveTo(x,y);
    //   ctx.lineTo(105,25);
    //   ctx.lineTo(25,105);
    //   ctx.fill();
    // }

  },

  ready: function() {

  },

  step: function(delta) {

  },

  render: function(delta) {
      
  },

  mousedown: function(event) {

  },

  mouseup: function(event) {

  },

  mousemove: function(event) {

  },

  keydown: function(event) {

  },

  keyup: function(event) {

  }

});