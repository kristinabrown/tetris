
const _ = require('underscore')


  const pieces = [];

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

  function checkBoard(board) {
    var rows = [];
    for (var i = 0; i < board.length; i++) {
      if(_.every(board[i])){
        rows.push(i);
      }
    }
    return rows
  }

  function clearRows(board) {
    var rows = checkBoard(board);
    rows.forEach(function(r){
      board.splice(r, 1)
      board.unshift([0,0,0,0,0,0,0,0,0,0])
    })

  }

  function gameStatus(board) {
    if (_.contains(board[0], 1)){
      // alert("game over!");
    }
  }


module.exports = {
  pieces: pieces,
  board: board,
  clearRows: clearRows,
  gameStatus: gameStatus
 }
