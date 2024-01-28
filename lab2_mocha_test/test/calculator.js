const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator Tests', function() {
  describe('Addition', function() {
    it('add(5, 2) expected result 7 ', function() {
      expect(calculator.add(5, 2)).to.equal(7);
    });

    it('add(5, 2) expected result 8', function() {
      expect(calculator.add(5, 2)).to.equal(8);
    });
  });

  describe('Subtraction', function() {
    it('sub(5, 2) expected result 3 ', function() {
      expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) expected result 5 ', function() {
      expect(calculator.sub(5, 2)).to.equal(5);
    });
  });

  describe('Multiplication', function() {
    it('mul(5, 2) expected result 10', function() {
      expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) expected result 12', function() {
      expect(calculator.mul(5, 2)).to.equal(12);
    });
  });

  describe('Division', function() {
    it('div(10, 2) expected result 5', function() {
      expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10,2) expected result 2', function() {
      expect(calculator.div(10, 2)).to.equal(2);
    });
  });
});
