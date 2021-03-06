const _ = require('underscore');

const pieces = [];

const board = [ [0,0,0,0,0,0,0,0,0,0],
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
            ];

function checkBoard(board) {
  var rows = [];
  for (var i = 0; i < board.length; i++) {
    if(_.every(board[i])){
      rows.push(i);
    }
  }
  return rows;
}

function clearRows(board) {
  var rows = checkBoard(board);
  rows.map(function(r){
    pieces.map(function(block, i){
      if(block.y === r){
        pieces.splice(i, 1);
      }
    });
    board.splice(r, 1);
    board.unshift([0,0,0,0,0,0,0,0,0,0]);
  });
    return board;
}

function gameStatus(board) {
  if (_.contains(board[0], 1)){
    alert("game over!");
  }
}


module.exports = {
  pieces: pieces,
  board: board,
  clearRows: clearRows,
  gameStatus: gameStatus
};
