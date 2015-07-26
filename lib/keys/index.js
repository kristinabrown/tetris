// const $ = require('jquery')
// const pieces = require('../board').pieces;
// const board = require('../board').board;
// var currentShape = require('../game').currentShape;
// 
// 
// var keyCodes = {
//   40: "down",
//   37: "left",
//   39: "right"
// }
// 
// 
// $(document).on("keyup", function(event){
//   console.log("keyup");
//   let direction = keyCodes[event.keyCode]
//   if (direction) {
//     switch(direction){
//     case 'left':
//     console.log("left");
//       currentShape().left(board, pieces)
//       break;
//     case 'right':
//     console.log("right");
//       currentShape().right(board, pieces)
//       break;
//     case 'down':
//       currentShape().down(board, pieces)
//       break;
//     default:
//       break;
//     }
//   }
// })
