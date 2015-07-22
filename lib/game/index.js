var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Block = require('../block');
var board = require('../board').board;
var pieces = require('../board').pieces;


var newblock = new Block(4,0)

pieces.push(newblock);
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
    if(block.set == false){
      block.down(board);
    }
  })

  setTimeout(function() {requestAnimationFrame(gameLoop)}, 100);

});
