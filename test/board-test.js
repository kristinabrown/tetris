const chai = require('chai');
const assert = chai.assert;
const board = require('../lib/board/index');
const clearRows = require('../lib/board/index').clearRows;
const checkBoard = require('../lib/board/index').checkBoard;
const gameStatus = require('../lib/board/index').gameStatus;


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
                [1,1,1,1,1,1,1,1,1,1]
              ]

  it('should be able to clear filled row', function () {
    clearRows(board);
    assert.deepEqual(board[19], [0,0,0,0,0,0,0,0,0,0]);
  });

  var board2 = [[0,0,0,0,0,0,0,0,0,0],
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
                [1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1]
              ]
    it('should be able to clear multiple filled row', function () {
      clearRows(board);
      assert.deepEqual(board[15], [0,0,0,0,0,0,0,0,0,0]);
    });

    var board3 = [[1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,1,1,1,1,0,1,1,1,1],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,1,1,1,1,0,1,1,1,0]
                ]

      xit('should end game if column fills up', function () {
        result = gameStatus(board);
        assert(result);
      });


});
