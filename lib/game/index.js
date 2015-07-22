var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

requestAnimationFrame(function gameLoop(){
  var block = new Block(4,1)
  board.map(function(row, rIndex){
    row.map(function(spot, cIndex){
      if(spot == 1){
        let block = new Block(cIndex, rIndex);
        context.fillRect(block.x * 30, block.y * 30, block.width, block.height);
      }
    })
  })
  // context.clearRect(0, 0, canvas.width, canvas.height - (block.height * thing));
  block.down(board);
  setTimeout(function() {requestAnimationFrame(gameLoop)}, 100);

});
