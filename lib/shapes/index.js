const Block = require('../block').Block;
var _ = require('underscore');
var pieces = require('../board').pieces;
var downOpen = require('../block').downOpen;
var board = require('../board').board;

const i = [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]

const l = [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]

const j = [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]

const o = [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]

const s = [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]

const t = [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]

const z = [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]

const allShapes = [i, l, j, o, s, t, z]

function Shape() {
  this.blocks = _.shuffle(allShapes)[0];
  // this.blocks = i;
}

Shape.prototype.down = function (board, pieces) {
  if (this.downOpen()) { this.blocks.forEach(function (block){ block.down(board, pieces)}); }
}

Shape.prototype.right = function (board, pieces) {
  if (this.rightOpen()) { _.each(this.blocks, function (block){ block.right(board, pieces)}); }
}

Shape.prototype.left = function (board, pieces) {
  if (this.leftOpen()) { _.each(this.blocks, function (block){ block.left(board, pieces)}); }
}

Shape.prototype.downOpen = function () {
  return this.blocks.every(isBlockSet);
}

Shape.prototype.rightOpen = function () {
  return this.blocks.every(isBlockSet);
}

Shape.prototype.leftOpen = function () {
  return this.blocks.every(isBlockSet);
}

function nextShape() {
  var shape = new Shape();
  shape.blocks.forEach(function(block) {
    pieces.push(block);
  });
  return shape;
};

function isBlockSet (block) {
  if(!block.set) {
    return true;
  } else {return false}
}

module.exports =  {
  nextShape: nextShape,
  i: i,
  Shape: Shape,
  isBlockSet: isBlockSet
}
