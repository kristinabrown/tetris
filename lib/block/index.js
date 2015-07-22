// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
//
// class Block {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.width = 30;
//     this.height = 30;
//   }
//
//   down() { move.call(this, 0, 1); }
// }
const clearRows = require('../board/index.js')

function Block (x, y){
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;
}

Block.prototype.down = function (board) {
  if (downOpen.call(this, board)){
    move.call(this, 0, 1, board);
  } else {
    setBlock.call(this, board);
    clearRows(board);
    gameStatus(board);
  }
};

Block.prototype.right = function (board) {
  if (rightOpen.call(this, board)) {
    move.call(this, 1, 0, board);
  }
};

Block.prototype.left = function (board) {
  if (leftOpen.call(this, board)) {
    move.call(this, -1, 0, board);
  }
};

const move = function (xOffset, yOffset, board) {
  board[this.y][this.x] = 0;
  this.x = this.x + xOffset;
  this.y = this.y + yOffset;
  board[this.y][this.x] = 1;
  return this;
}

const downOpen = function(board){
  if(this.y + 1 > 19 ) {
    return false;
  } else if(board[this.y + 1][this.x] === 0) {
    return true;
  } else {
    return false;
  }
}

const rightOpen = function(board){
  if(this.x + 1 > 9 ) {
    return false;
  } else if(board[this.y][this.x + 1] === 0) {
    return true;
  } else {
    return false;
  }
}

const leftOpen = function(board){
  if(this.x - 1 < 0 ) {
    return false;
  } else if(board[this.y][this.x - 1] === 0) {
    return true;
  } else {
    return false;
  }
}
const setBlock = function(board) {
  board[this.y][this.x] = 1
}

module.exports = Block


// Block.prototype.draw = function () {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// }
//
// var thing = 1
//
// Block.prototype.move = function () {
//   // for (var i = this.y; this.y + this.height < canvas.height; i += 30) {
//   //   this.y+=30
//   // }
//   if (this.y + this.height < canvas.height) {
//     this.y+=30;
//   } else {
//     block = new Block(120, 0, 30, 30);
//     thing += 1
//   };
//   return this;
// };
//
// var blocks = [];
// var block = new Block(120, 0, 30, 30);
// // var block1 = new Block(90, 30, 30, 30);
//
//
// blocks.push(block);
// // blocks.push(block1);
//
//
// requestAnimationFrame(function gameLoop(){
//   context.clearRect(0, 0, canvas.width, canvas.height - (block.height * thing));
//   block.draw().move();
//   setTimeout(function() {requestAnimationFrame(gameLoop)}, 100);
//
// });
//
//
//
