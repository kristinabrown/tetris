const chai = require('chai');
const assert = chai.assert;
const Block = require('../lib/block').Block;

describe('block', function () {
  it('has an x', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    assert.equal(b.x, 1);
    pieces.unshift();
  });

  it('has a y', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    assert.equal(b.y, 0);
    pieces.unshift();
  });

  it('has a height', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    assert.equal(b.height, 30);
    pieces.unshift();
  });

  it('has a width', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    assert.equal(b.width, 30);
    pieces.unshift();
  });

  var pieces = []

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
    pieces.push(b);
    b.down(board, pieces);

    assert.equal(b.y, 1);
    pieces.unshift();
  });

  xit('should not be able to move down when at the bottom', function () {
    var b = new Block(5, 19);
    pieces.push(b);
    b.down(board, pieces);
    assert.equal(b.y, 19);
    pieces.unshift();
  });

  it('should be able to move to the right', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    b.right(board, pieces);
    assert.equal(b.x, 2);
    pieces.unshift();
  });

  it('should not be able to move to the right', function () {
    var b = new Block(9, 0);
    pieces.push(b);
    b.right(board, pieces);
    assert.equal(b.x, 9);
    pieces.unshift();
  });

  it('should be able to move to the left', function () {
    var b = new Block(1, 0);
    pieces.push(b);
    b.left(board);
    assert.equal(b.x, 0);
    pieces.unshift();
  });

  it('should not be able to move to the left', function () {
    var b = new Block(0, 0);
    pieces.push(b);
    b.left(board);
    assert.equal(b.x, 0);
    pieces.unshift();
  });

  xit('should be stuck if it cant move down', function () {
    var b = new Block(5, 19);
    pieces.push(b);
    b.down(board, pieces);
    assert.equal(1, board[b.y][b.x]);
    pieces.unshift();
  });

  xit('should stack on another', function () {
    var b1 = new Block(5, 16);
    pieces.push(b1);
    var b = new Block(5, 19);
    pieces.push(b);
    b1.down(board, pieces);
    b1.down(board, pieces);
    b1.down(board, pieces);
    b1.down(board, pieces);
    b1.down(board, pieces);
    assert.equal(18, b1.y);
    pieces.unshift();
  });

  xit('should stack on another2', function () {
    var b1 = new Block(5, 16);
    pieces.push(b1);
    var b = new Block(5, 19);
    pieces.push(b);
    b1.down(board, pieces);
    b1.down(board, pieces);
    b1.down(board, pieces);
    b1.down(board, pieces);
    assert.equal(1, board[b1.y][b1.x]);
    pieces.unshift();
  });
})
