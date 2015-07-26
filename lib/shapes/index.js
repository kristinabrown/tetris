const Block = require('../block').Block;
var _ = require('underscore');
var pieces = require('../board').pieces;
var downOpen = require('../block').downOpen;
var board = require('../board').board;
var rightOpen = require('../block').rightOpen;
var leftOpen = require('../block').leftOpen;

const i = [new Block(4,3), new Block(4,2), new Block(4,1), new Block(4,0)]

const l = [new Block(3,2), new Block(4,2), new Block(4,1), new Block (4,0)]

const j = [new Block(4,2), new Block(5,2), new Block(5,1), new Block(5,0)]

const o = [new Block(4,1), new Block(4,0), new Block(5,1), new Block(5,0)]

const s = [new Block(4,1), new Block(5,1), new Block(5,0), new Block(6,0)]

const t = [new Block(5,1), new Block(4,0), new Block(5,0), new Block(6,0)]

const z = [new Block(5,1), new Block(6,1), new Block(5,0), new Block(4,0)]

var allShapes = [i, l, j, o, s, t, z]

function Shape() {
  this.blocks = _.shuffle(allShapes)[0];
}

Shape.prototype.down = function (board, pieces) {
  if (this.downOpen()) { this.blocks.forEach(function (block){ block.down(board, pieces)}); }
}

Shape.prototype.right = function (board, pieces) {
  if (this.rightEdge(board, pieces)) {
    console.log("hi")
  }else if(this.rightOpen()) { _.each(this.blocks, function (block){ block.right(board, pieces)}); }
}

Shape.prototype.left = function (board, pieces) {
  if (this.leftEdge(board, pieces)) {
    console.log("hey")
  } else if (this.leftOpen()) { _.each(this.blocks, function (block){ block.left(board, pieces)}); }
}

Shape.prototype.downOpen = function () {
  return this.blocks.every(isBlockSet) && downOpen.call(this.blocks[0], board, pieces) && downOpen.call(this.blocks[1], board, pieces) && downOpen.call(this.blocks[2], board, pieces) && downOpen.call(this.blocks[3], board, pieces);
}

Shape.prototype.rightOpen = function () {
  return this.blocks.every(isBlockSet);
}

Shape.prototype.rightEdge = function (board, pieces){
  var rightMost = Math.max.apply(null, this.blocks.map(function(block){ return block.x }))
  var result = this.blocks.filter(
      function (block) {
          return (block.x === rightMost);
      }
  );
  
  if(!rightOpen.call(result[0], board, pieces)){

  return true;
 }
}

Shape.prototype.leftEdge = function (board, pieces){
  var leftMost = Math.min.apply(null, this.blocks.map(function(block){ return block.x }))
  var result = this.blocks.filter(
      function (block) {
          return (block.x === leftMost);
      }
  );
  
  if(!leftOpen.call(result[0], board, pieces)){

  return true;
 }
}

// Shape.prototype.bottomEdge = function (board, pieces){
//   var bottomMost = Math.max.apply(null, this.blocks.map(function(block){ return block.y }))
//   var result = this.blocks.filter(
//       function (block) {
//           return (block.x === leftMost);
//       }
//   );
//   
//   if(!leftOpen.call(result[0], board, pieces)){
// 
//   return true;
//  }
// }


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
