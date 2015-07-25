const chai = require('chai');
const assert = chai.assert;
const i = require('../lib/shapes').i;
const Shape = require('../lib/shapes').shape;
const Block = require('../lib/block').Block;


describe('shapes', function () {
  it('i is an array of blocks', function () {
    assert(Array.isArray(i[0]));
  });

  it('it should be able to move down', function(){
    var testShape = new Shape()

    var result = testShape.down();

    assert.equal(testShape.blocks[0], 0)
  });




});
