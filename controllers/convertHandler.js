function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = eval(input.match(/[\d./]*/)[0]);

    
      
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]*/)[0].toLowerCase();
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = null;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch(initUnit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
        result = 'litres';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = null;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
