var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Block  = require('../block').Block;
var board  = require('../board').board;
var pieces = require('../board').pieces;
var nextShape = require('../shapes').nextShape;
var isBlockSet = require('../shapes').isBlockSet;
var $ = require('jquery')
var _ = require('underscore');


var currentShape = nextShape();

requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.map(function(row, rIndex){
    row.map(function(spot, cIndex){
      if(spot == 1){
        var block = new Block(cIndex, rIndex);
        context.fillRect(block.x * 30, block.y * 30, block.width, block.height);
      }
    })
  })

  if(_.every(currentShape.blocks, isBlockSet)) {
    currentShape.down(board, pieces)
  };

  // _.each(currentShape, function(block){
  //   if(!block.set){ block.down(board, pieces); }
  // });

  if(pieces.every(function isBlockSet (block) {
    if(block.set) {
      return true;
    }
  })) {
    currentShape = nextShape();
  }

  setTimeout(function() {requestAnimationFrame(gameLoop)}, 300);

});


var keyCodes = {
  40: "down",
  37: "left",
  39: "right"
}


$(document).on("keyup", function(event){
  console.log("keyup");
  var direction = keyCodes[event.keyCode]
  if (direction) {
    switch(direction){
    case 'left':
    console.log("left");
      currentShape.left(board, pieces)
      break;
    case 'right':
    console.log("right");
      currentShape.right(board, pieces)
      break;
    case 'down':
      currentShape.down(board, pieces)
      break;
    default:
      break;
    }
  }
})
module.exports = currentShape;
