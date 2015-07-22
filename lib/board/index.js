// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

const _ = require('underscore')


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
      alert("game over!");
    }
  }

  const pieces = [];


//
// function makeGrid() {
//   for (var x = 0; x < 300; x += 30) {
//     context.moveTo(x, 0);
//     context.lineTo(x, 600);
//   }
//
//   for (var y = 0; y < 600; y += 30) {
//     context.moveTo(0, y);
//     context.lineTo(299, y);
//   }
//
//   context.strokeStyle = "#ddd";
//   context.stroke();
// }

// makeGrid();
module.exports = {
  pieces,
  board,
  clearRows,
  gameStatus
 }

// module.exports = checkBoard;
// module.exports = clearRows;
// module.exports = gameStatus;
