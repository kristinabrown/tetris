const Block = require('../block').Block;
var _ = require('underscore');
var pieces = require('../board').pieces;
var downOpen = require('../block').downOpen;
var board = require('../board').board;
var rightOpen = require('../block').rightOpen;
var leftOpen = require('../block').leftOpen;
const clearRows = require('../board/index.js').clearRows;
const gameStatus = require('../board/index.js').gameStatus;

var i = {shape: "i", blocks: [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]};

var l = {shape: "l", blocks: [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]};

var j = {shape: "j", blocks: [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]};

var o = {shape: "o", blocks: [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]};

var s = {shape: "s", blocks: [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]};

var t = {shape: "t", blocks: [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]};

var z = {shape: "z", blocks: [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]};

var ii = {shape: "i", blocks: [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]};

var ll = {shape: "l", blocks: [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]};

var jj = {shape: "j", blocks: [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]};

var oo = {shape: "o", blocks: [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]};

var ss = {shape: "s", blocks: [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]};

var tt = {shape: "t", blocks: [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]};

var zz = {shape: "z", blocks: [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]};

var iii = {shape: "i", blocks: [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]};

var lll = {shape: "l", blocks: [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]};

var jjj = {shape: "j", blocks: [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]};

var ooo = {shape: "o", blocks: [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]};

var sss = {shape: "s", blocks: [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]};

var ttt = {shape: "t", blocks: [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]};

var zzz = {shape: "z", blocks: [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]};

var iiii = {shape: "i", blocks: [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]};

var llll = {shape: "l", blocks: [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]};

var jjjj = {shape: "j", blocks: [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]};

var oooo = {shape: "o", blocks: [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]};

var ssss = {shape: "s", blocks: [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]};

var tttt = {shape: "t", blocks: [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]};

var zzzz = {shape: "z", blocks: [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]};

var allShapes = [i, l, j, o, s, t, z, ii, ll, jj, oo, ss, tt, zz, iii, lll, jjj, ooo, sss, ttt, zzz, iiii, llll, jjjj, oooo, ssss, tttt, zzzz];

function Shape() {
  console.log("another one!");
  var shuffled =  _.shuffle(allShapes);
  var selectedShape = shuffled.shift();
  this.blocks = selectedShape.blocks;
  this.shape = selectedShape.shape;
}

Shape.prototype.down = function (board, pieces) {
  if (this.downOpen()) { 
    this.blocks.forEach(function (block){ block.down(board, pieces);}); 
  } else {
    clearRows(board);
    gameStatus(board);
  }
};

Shape.prototype.right = function (board, pieces) {
  if (this.rightEdge(board, pieces)) {
  }else if(this.rightOpen()) { _.each(this.blocks, function (block){ block.right(board, pieces);}); }
};

Shape.prototype.left = function (board, pieces) {
  if (this.leftEdge(board, pieces)) {
  } else if (this.leftOpen()) { _.each(this.blocks, function (block){ block.left(board, pieces);}); } 
};

Shape.prototype.downOpen = function () {
  return this.blocks.every(isBlockSet) && downOpen.call(this.blocks[0], board, pieces) && downOpen.call(this.blocks[1], board, pieces) && downOpen.call(this.blocks[2], board, pieces) && downOpen.call(this.blocks[3], board, pieces);
};

Shape.prototype.rightOpen = function () {
  return this.blocks.every(isBlockSet);
};

Shape.prototype.rightEdge = function (board, pieces){
  var rightMost = Math.max.apply(null, this.blocks.map(function(block){ return block.x; }));
  var result = this.blocks.filter(
      function (block) {
          return (block.x === rightMost);
      }
  );
  
  if(!rightOpen.call(result[0], board, pieces)){

  return true;
 }
};

Shape.prototype.leftEdge = function (board, pieces){
  var leftMost = Math.min.apply(null, this.blocks.map(function(block){ return block.x; }));
  var result = this.blocks.filter(
      function (block) {
          return (block.x === leftMost);
      }
  );
  
  if(!leftOpen.call(result[0], board, pieces)){

  return true;
 }
};

Shape.prototype.leftOpen = function () {
  return this.blocks.every(isBlockSet);
};

function nextShape() {
  var shape = new Shape();
  shape.blocks.forEach(function(block) {
    pieces.push(block);
  });
  return shape;
}

function isBlockSet (block) {
  if(!block.set) {
    return true;
  } else {return false;}
}

module.exports =  {
  nextShape: nextShape,
  i: i,
  Shape: Shape,
  isBlockSet: isBlockSet
};
