var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


function makeGrid() {
  for (var x = 0; x < 300; x += 30) {
    context.moveTo(x, 0);
    context.lineTo(x, 600);
  }

  for (var y = 0; y < 600; y += 30) {
    context.moveTo(0, y);
    context.lineTo(299, y);
  }

  context.strokeStyle = "#ddd";
  context.stroke();
}

makeGrid();