var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Block  = require('../block').Block;
var board  = require('../board').board;
var pieces = require('../board').pieces;
var nextShape = require('../shapes').nextShape;
var _ = require('underscore');
// var newblock = i[0];


  // newblock.forEach(function(piece) {
  //   pieces.push(piece);
  // })

nextPiece();
// pieces.push(newblock);
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

  pieces.forEach(function(block){
    if(!block.set){ block.down(board); }
  });

  if(_.compact(pieces.map(function(piece){if(piece.set === true){return 1;}})).length === pieces.length) {
    nextPiece();
  }



  setTimeout(function() {requestAnimationFrame(gameLoop)}, 300);

});
