const chai = require('chai');
const assert = chai.assert;
const i = require('../lib/pieces').i
const Piece = require('../lib/pieces').Piece
const Block = require('../lib/block').Block;


describe('pieces', function () {
  it('i is an array of blocks', function () {
    assert(Array.isArray(i[0]));
  });

  it('it should be able to move down', function(){
    var testPiece = new Piece ();


    var result = testPiece.down();

    assert_equal(result[0].y, i[0][0].y)
  });




});
