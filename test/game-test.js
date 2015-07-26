const chai = require('chai');
const assert = chai.assert;
const Block = require('../lib/block').Block;


describe('game', function () {
var board = [ [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [1,1,1,1,1,1,1,0,1,1]
            ]

  var pieces = []

  it('clear a row when a block sets', function () {
    var b = new Block(7, 18);
    pieces.push(b);
    b.down(board, pieces);
    b.down(board, pieces);

    assert.deepEqual([0,0,0,0,0,0,0,0,0,0], board[19]);
  });

  it('changes grid value from 0 to 1', function () {
    var b = new Block(3, 3);
    pieces.push(b);
    b.down(board, pieces);
    assert.equal(1, board[4][3]);
  });

  it('changes grid value from 1 to 0', function () {
    var b = new Block(3, 3);
    pieces.push(b);
    b.down(board, pieces);
    assert.equal(0, board[0][3]);
  });
});
