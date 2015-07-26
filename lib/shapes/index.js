const Block = require('../block').Block;
var _ = require('underscore');
var pieces = require('../board').pieces;
var downOpen = require('../block').downOpen;
var board = require('../board').board;

const i = [[new Block(4,0), new Block(4,1), new Block(4,2), new Block(4,3)],
            [new Block(3,0), new Block(4,0), new Block(5,0), new Block(6,0)],
            [new Block(5,0), new Block(5,1), new Block(5,2), new Block(5,3)],
            [new Block(3,1), new Block(4,1), new Block(5,1), new Block(6,1)]
          ]

const l = [ [new Block(4,0), new Block(4,1), new Block(4,2), new Block (3,2)],
            [new Block(3,0), new Block(3,1), new Block(4,1), new Block(5,1)],
            [new Block(5,0), new Block(4,0), new Block(4,1), new Block(4,2)],
            [new Block(3,0), new Block(4,0), new Block(5,0), new Block(5,1)]
          ]

const j = [ [new Block(4,2), new Block(5,0), new Block(5,1), new Block(5,2)],
            [new Block(4,0), new Block(4,1), new Block(5,1), new Block(5,2)],
            [new Block(5,0), new Block(5,1), new Block(5,2), new Block(6,0)],
            [new Block(4,0), new Block(5,0), new Block(6,0), new Block(6,1)]
          ]

const o = [ [new Block(4,0), new Block(5,0), new Block(4,1), new Block(5,1)],
            [new Block(4,0), new Block(5,0), new Block(4,1), new Block(5,1)],
            [new Block(4,0), new Block(5,0), new Block(4,1), new Block(5,1)],
            [new Block(4,0), new Block(5,0), new Block(4,1), new Block(5,1)]
          ]

const s = [ [new Block(6,0), new Block(5,0), new Block(5,1), new Block(4,1)],
            [new Block(4,0), new Block(4,1), new Block(5,1), new Block(5,2)],
            [new Block(4,1), new Block(4,1), new Block(4,0), new Block(5,0)],
            [new Block(5,0), new Block(5,1), new Block(6,1), new Block(6,2)]
          ]
//
// const t = [ [new Block(4,0), new Block(5,0), new Block(5,1), new Block(6,0)]
//             // [new Block(), new Block(), new Block(), new Block()],
//             // [new Block(), new Block(), new Block(), new Block()],
//             // [new Block(), new Block(), new Block(), new Block()]
//           ]
//
// const z = [ [new Block(4,0), new Block(5,0), new Block(5,1), new Block(6,1)]
//             // [new Block(), new Block(), new Block(), new Block()],
//             // [new Block(), new Block(), new Block(), new Block()],
//             // [new Block(), new Block(), new Block(), new Block()]
//           ]

const allShapes = [i,j,l,o,s]

function isBlockSet (block) {
  if(!block.set) {
    return true;
  } else {return false}

}

function Shape() {
  // this.blocks = _.shuffle(allPieces)[0][0];
  this.blocks = i[0];
}

Shape.prototype.downOpen = function () {
  return this.blocks.every(isBlockSet);
}

Shape.prototype.down = function (board) {
  if (this.downOpen()) { this.blocks.forEach(function (block){ block.down(board)}); }
  else (console.log("gdi"))
}

function nextShape() {
  var shape = new Shape();
  shape.blocks.forEach(function(block) {
    return pieces.push(block);
  });
};

module.exports =  {
  nextShape: nextShape,
  i: i,
  Shape: Shape
}
