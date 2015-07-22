const chai = require('chai');
const assert = chai.assert;
const Block = require('../lib/block/index');

describe('block', function () {
  it('have an x', function () {
    var b = new Block(1, 0);
    assert.equal(b.x, 1);
  });

  it('have a y', function () {
    var b = new Block(1, 0);
    assert.equal(b.y, 0);
  });

  it('have a height', function () {
    var b = new Block(1, 0);
    assert.equal(b.height, 30);
  });

  it('have a width', function () {
    var b = new Block(1, 0);
    assert.equal(b.width, 30);
  });

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
                [0,0,0,0,0,0,0,0,0,0]
              ]

  it('should be able to move down', function () {
    var b = new Block(1, 0);
    b.down(board);

    assert.equal(b.y, 1);
  });

  it('should not be able to move down', function () {
    var b = new Block(5, 19);
    b.down(board);
    assert.equal(b.y, 19);
  });

  it('should be able to move to the right', function () {
    var b = new Block(1, 0);
    b.right(board);
    assert.equal(b.x, 2);
  });

  it('should not be able to move to the right', function () {
    var b = new Block(9, 0);
    b.right(board);
    assert.equal(b.x, 9);
  });

  it('should be able to move to the left', function () {
    var b = new Block(1, 0);
    b.left(board);
    assert.equal(b.x, 0);
  });

  it('should not be able to move to the left', function () {
    var b = new Block(0, 0);
    b.left(board);
    assert.equal(b.x, 0);
  });

  it('should be stuck if it cant move down', function () {
    var b = new Block(5, 19);
    b.down(board);
    assert.equal(1, board[b.y][b.x]);
  });

  it('should stack on another', function () {
    var b1 = new Block(5, 16);
    var b = new Block(5, 19);
    b1.down(board);
    b1.down(board);
    b1.down(board);
    b1.down(board);
    assert.equal(18, b1.y);
  });

  it('should stack on another', function () {
    var b1 = new Block(5, 16);
    var b = new Block(5, 19);
    b1.down(board);
    b1.down(board);
    b1.down(board);
    b1.down(board);
    assert.equal(1, board[b1.y][b1.x]);
  });
})
