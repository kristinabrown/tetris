const $ = require('jquery')
const pieces = require('../board').pieces;
const board = require('../board').board;


var keyCodes = {
  37: "left",
  39: "right"
}


$(document).on("keyup", function(event){
  let direction = keyCodes[event.keyCode]
  if (direction) {
    pieces.forEach(function(block){
      if(block.set == false){
        switch(direction){
        case 'left':
          block.left(board)
          break;
        case 'right':
          block.right(board)
          break;
        default:
          break;
        }
      }
    })
  }
})
