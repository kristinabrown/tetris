const chai = require('chai');
const assert = chai.assert;
const board = require('../lib/board/index');

describe('board', function () {
  it('should be an array', function () {
    assert(Array.isArray(board));
  });

  it('should be an array of arrays', function () {
    assert(Array.isArray(board[0]));
  });

  it('should be an array with twenty arrays', function () {
    assert.equal(board.length, 20);
  });

  it('should be an array with twenty arrays and 10 0s in each array', function () {
    assert.equal(board[0].length, 10);
  });
});
