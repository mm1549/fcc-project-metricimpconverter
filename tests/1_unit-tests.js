const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Read whole number input', () => {
    assert.equal(convertHandler.getNum('2mi'), 2);  
  });

  test('Read decimal number input', () => {
    assert.equal(convertHandler.getNum('1.2km'), 1.2);
  });

  test('Read fractional number input', () => {
    assert.equal(convertHandler.getNum('1/2l'), 0.5);
  });

  test('Read fractional and decimal number input', () => {
    assert.equal(convertHandler.getNum('1.8/2l'), 0.9);
  });

  test('Return error on double fraction', () => {
    assert.isNull(convertHandler.getNum('3/2/3'));
  });

  test('Default to 1 when no number input', () => {
    assert.equal(convertHandler.getNum('gal'), 1);
  });

  test('Read input unit', () => {
    assert.equal(convertHandler.getUnit('10gal'), 'gal');
    assert.equal(convertHandler.getUnit('10l'), 'L');
    assert.equal(convertHandler.getUnit('10L'), 'L');
    assert.equal(convertHandler.getUnit('10mi'), 'mi');
    assert.equal(convertHandler.getUnit('10km'), 'km');
    assert.equal(convertHandler.getUnit('10lbs'), 'lbs');
    assert.equal(convertHandler.getUnit('10kg'), 'kg');
  });

  test('Return error on invalid unit', () => {
    assert.isNull(convertHandler.getUnit('cm'));
  });

   test('Get correct return unit for valid input unit', () => {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });

  test('Get correct spelled unit for valid input unit', () => {
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
    assert.equal(convertHandler.spellOutUnit('L'), 'liters');
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
    assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
    assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
  });

  test('Correctly convert from gal to L', () => {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.785, 0.001);
  });
  
  test('Correctly convert from L to gal', () => {
    assert.approximately(convertHandler.convert(1, 'L'), 0.264, 0.001);
  });
  
  test('Correctly convert from mi to km', () => {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.609, 0.001);
  });

  test('Correctly convert from km to mi', () => {
    assert.approximately(convertHandler.convert(1, 'km'), 0.621, 0.001);
  });

  test('Correctly convert from lbs to kg', () => {
    assert.approximately(convertHandler.convert(1, 'lbs'), 0.454, 0.001);
  });

  test('Correctly convert from kg to lbs', () => {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.205, 0.001);
  });
});