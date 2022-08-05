'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req,res) => {
    let initNum = convertHandler.getNum(req.query.input);
    let initUnit = convertHandler.getUnit(req.query.input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (initUnit === null && initNum === null) return res.send("invalid number and unit");
    if (initNum === null) return res.send("invalid number");
    if (initUnit === null) return res.send("invalid unit");

    res.send({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: returnString
    });
  });

};
