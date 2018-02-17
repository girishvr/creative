var app = playground({

  create: function() {
    
    var element = document.getElementById("mycanvas")
    var context = element.getContext("2d")

    var img = document.createElement("img");
    img.src = "image/walkingdead.png";

    var spriteWidth = 2000
    var spriteHeight = 312

    columns = 10
    rows = 1

    var width = spriteWidth/columns
    var height = spriteHeight/rows

    var currentFrame = columns-1
    var frameCount = columns

    var xCoeff = 0
    var yCoeff = 0

    var sourceX = 10
    var sourceY = 10
    level = 0

  
    function updateFrame(){
      currentFrame = (currentFrame-1)

      if (currentFrame == -1){
        currentFrame = columns-1
        level = (level+1)
      }
        //calculating the x coordinate for spreadsheet
      sourceX = currentFrame*width
      
      }

      var move = 0

      function play(){
        context.clearRect(0,0,2000,2000)

        updateFrame()

        //draw the image
        context.drawImage(img,
          //sourece window
          sourceX,
          sourceY,
          width,
          height,
          // //destination window
          xCoeff+move,
          yCoeff,
          width,
          height
          )
        move = (move+10)%1000
      }

      setInterval(play, 100)


// ====================================================================================

    //Archemedian curve
    // a = 0;
    // b = 0;
    // i = 0;


    // function drawSpiral(){
    //   // ctx.clearRect(0,0,1000,1000);
    // // for (var i = 1; i <= 200; i=i+0.01) {      
    //   i=i+0.09;
    //   angle = (angle+0.01)%360;
    //   x = i * Math.sin(angle);
    //   y = i * Math.cos(angle);
    //   ctx.fillRect(x+300,y+300,width,height);
    //   if (i > 200){
    //       // clearInterval(myVar);
    //   }
    // }

    // setInterval(drawSpiral, 1);



// ===========================================================

    // sine wave  

    // var width = 3;
    // height = 3
    // x = 125;
    // y = 225;
    // angle = 0
    // amplitude = 1

    // for (var i = 10; i <= 1000; i=i+0.1) {      
    //   angle = (angle+0.01)%360;
    //   y = y+ amplitude*Math.cos(angle);      
    //   // ctx.fillRect(x+i,y,width,height);  
    // }

// ====================================================================================

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

// ====================================================================================

    // Bubble Animations

    // var myBag = []  
    // width = 25
    // height = 25

    // size = 2

    // arrayColor = ["Aqua","Aquamarine","Azure","Chartreuse","Coral","CornflowerBlue","DarkSalmon",
    // "DarkTurquoise","DarkSlateBlue","DeepSkyBlue","HotPink","LavenderBlush","Yellow"]

    // function drawCube(){
    //   ctx.clearRect(0,0,2000,2000)

    //   var box = {
    //     x :600,
    //     y :200,
    //     xSpeed : randomRange(-10,10),
    //     ySpeed : randomRange(-10,10),
    //     size : 40,
    //     color: arrayColor[randomRange(0,12)]
    //   };


    //   myBag.push(box)

    //   for (var i = myBag.length - 1; i >= 0; i--) {
    //     bx = myBag[i]

    //     ctx.fillStyle = bx.color;
        
    //     bx.x=bx.x+bx.xSpeed; 
    //     bx.y=bx.y+bx.ySpeed;
    //     bx.size = bx.size/1.02

    //     // ctx.fillRect(bx.x,bx.y,bx.size,bx.size);
    //     ctx.beginPath();
    //     ctx.arc(bx.x,bx.y,bx.size,0,2*Math.PI);
    //     ctx.fill();
    //   }

    // }

    // setInterval(drawCube, 50)

    // function randomRange(min, max){
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
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