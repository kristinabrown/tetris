var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Block (x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

var thing = 1

Block.prototype.move = function () {
  // for (var i = this.y; this.y + this.height < canvas.height; i += 30) {
  //   this.y+=30
  // }
  if (this.y + this.height < canvas.height) { 
    this.y+=30; 
  } else {
    block = new Block(120, 0, 30, 30);
    thing += 1
  };
  return this;
};

var blocks = [];
var block = new Block(120, 0, 30, 30);
// var block1 = new Block(90, 30, 30, 30);


blocks.push(block);
// blocks.push(block1);


requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height - (block.height * thing));
  block.draw().move();
  setTimeout(function() {requestAnimationFrame(gameLoop)}, 100); 

});



