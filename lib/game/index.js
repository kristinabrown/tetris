var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var roundCounter = 0

// var newblock = new Block(4,0)
requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (roundCounter === 0){
  }
  board.map(function(row, rIndex){
    row.map(function(spot, cIndex){
      if(spot == 1){
        var block = new Block(cIndex, rIndex);
        context.fillRect(block.x * 30, block.y * 30, block.width, block.height);
      }
    })
  })
  newblock.down(board);
  roundCounter += 1;
  setTimeout(function() {requestAnimationFrame(gameLoop)}, 100);

});
