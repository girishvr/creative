var app = playground({

  create: function() {
  
    var contex = document.getElementById("myCanvas");
    var ctx = contex.getContext("2d");

      contex.addEventListener('mousedown', sketchpad_mouseDown, false);
      contex.addEventListener('mousemove', sketchpad_mouseMove, false);
      window.addEventListener('mouseup', sketchpad_mouseUp, false);


    var boxes = []


    var mouseX = 200;
    var mouseY = 200;

    function draw(){
      var boxObject = {
       x : mouseX,
       y : mouseY,
       xSpeed : randomRange(-10,10),
       ySpeed : randomRange(-10,10),
       size  : 40
    }
        boxes.push(boxObject)
        
        ctx.clearRect(0,0,1000,1000);

        for (var i = 0; i <= boxes.length; i++) {
          var box = boxes[i]
          
          ctx.fillStyle = '#87CEEB';

          box.x = box.x + box.xSpeed;
          box.y = box.y + box.ySpeed;
          // width = width+10

          // ctx.fillRect(box.x,box.y,box.size,box.size);

            ctx.beginPath();
            ctx.arc(box.x,box.y, box.size, 0, 2 * Math.PI, false);
            ctx.fill();


          box.size = box.size * 0.98;  

         }
    }
    
    setInterval(draw, 30)

    function randomRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

 function sketchpad_mouseUp(e) {
                // getMousePos(e);

    }
    function sketchpad_mouseDown(e) {
                // getMousePos(e);

    }

    function sketchpad_mouseMove(e) { 
        // Update the mouse co-ordinates when moved
        getMousePos(e);
    }

    // Get the current mouse position relative to the top-left of the canvas
    function getMousePos(e) {
        if (!e)
         var e = event;

        if (e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if (e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
    }

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