const roundTo = require('round-to');

function ConvertHandler() {
  // Return unit object
  const returnUnit = {
    'gal': 'L',
    'L': 'gal',
    'mi': 'km',
    'km': 'mi',
    'lbs': 'kg',
    'kg': 'lbs'
  }

  const spellUnit = {
    'gal': 'gallons',
    'L': 'liters',
    'mi': 'miles',
    'km': 'kilometers',
    'lbs': 'pounds',
    'kg': 'kilograms'
  }
  
  this.getNum = function(input) {
    // Extract number part from string
    let result = input.match(/[\d\./]*/)[0];

    // Test for multiple fractions
    if (/[/].*[/]/.test(result)) return null;

    // Test for multiple successive decimal points
    if (/\.\./.test(result)) return null;

    // Default to 1 if Number is empty
    if (result == '') return 1
    
    // Try to evaluate number, return null if failed
    try {
      result = eval(result);
    }
    catch {
      return null
    }
      
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+/)[0].toLowerCase();
    if (result == 'l') {
      result = 'L';
    }
    if (!(result in returnUnit)) return null
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = returnUnit[initUnit];

    if (result === undefined) {
      return null;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = spellUnit[unit];

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return null
    }
    
    return roundTo(result,5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if (initNum === null || initUnit === null || returnNum === null || returnUnit === null) return null

    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
