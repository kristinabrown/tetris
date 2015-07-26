const clearRows = require('../board/index.js').clearRows;
const gameStatus = require('../board/index.js').gameStatus;
const pieces = require('../board').pieces;
const _ = require('underscore');

function Block (x, y){
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;
  this.set = false;
}

Block.prototype.down = function (board, pieces) {
  if (downOpen.call(this, board)){
    move.call(this, 0, 1, board);
  } else {
    setBlock.call(this, board);
    clearRows(board);
    gameStatus(board);
  }
};

Block.prototype.right = function (board, pieces) {
  if (rightOpen.call(this, board, pieces)) {
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

const downOpen = function(board, pieces){
  if(this.y + 1 >  19 ) {
    return false;
  } else if(board[this.y + 1][this.x] === 1 && findBlockInPieces(this.x, this.y+1, pieces).set === true ) {
    return false;
  } else {
    return true;
  }
}

function findBlockInPieces (x, y, pieces) {
  if(_.find(pieces, function(piece){var foundPiece = piece.x === x && piece.y === y; return foundPiece })) {
    return foundPiece
  } else {
    var fakeBlock = new Block(21,21);
    fakeBlock.set = true;
    return fakeBlock;
  }
}


const rightOpen = function(board, pieces){
  if(this.x + 1 > 9 ) {
    return false;
  } else if(board[this.y][this.x+1] === 1 && findBlockInPieces(this.x+1, this.y, pieces).set === true ) {
    return false;
  } else {
    return true;
  }
}

const leftOpen = function(board){
  if(this.x - 1 < 0 ) {
    return false;
  } else if(board[this.y][this.x-1] === 1 && findBlockInPieces(this.x-1, this.y, pieces).set === true ) {
    return false;
  } else {
    return true;
  }
}
const setBlock = function(board) {
  this.set = true;
  board[this.y][this.x] = 1;
}

module.exports = {
    Block: Block,
    downOpen: downOpen
}
