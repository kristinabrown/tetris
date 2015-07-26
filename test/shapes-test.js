const chai = require('chai');
const assert = chai.assert;
const i = require('../lib/shapes').i;
const Shape = require('../lib/shapes').Shape;
const Block = require('../lib/block').Block;
const board = require('../lib/board').board;


describe('shapes', function () {
  it('i is an array of blocks', function () {
    assert(Array.isArray(i[0]));
  });

  var pieces = [];

  it('it should be able to move down', function(){
    var testShape = new Shape();
    testShape.blocks.forEach(function(block){pieces.push(block)});

    testShape.down(board);

    assert.equal(testShape.blocks[0].y, 1)
  });

  it('it should should be able to move right', function() {
    var testShape = new Shape();
    testShape.blocks.forEach(function(block){pieces.push(block)});
    testShape.right(board, pieces);

    assert.equal(testShape.blocks[0].x, 5)
  });

  it('it should should be able to move right', function() {
    var testShape = new Shape();
    console.log(testShape.blocks[0].x)
    testShape.blocks.forEach(function(block){pieces.push(block)});
    testShape.left(board, pieces);

    assert.equal(testShape.blocks[0].x, 4)
  });





});
