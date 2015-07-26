var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Block  = require('../block').Block;
var board  = require('../board').board;
var pieces = require('../board').pieces;
var nextShape = require('../shapes').nextShape;
var isBlockSet = require('../shapes').isBlockSet;
var _ = require('underscore');


nextShape();

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

  _.each(pieces, function(block){
    if(!block.set){ block.down(board); }
  });

  if(pieces.every(function isBlockSet (block) {
    if(block.set) {
      return true;
    }
  })) {
    nextShape();
  }

  setTimeout(function() {requestAnimationFrame(gameLoop)}, 300);

});
