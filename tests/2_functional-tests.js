const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Convert valid input via API', (done) => {
    chai.request(server)
        .get('/api/convert?input=10L')
        .end((err,res) => {
          assert.equal(res.status, 200);
          let resObj = JSON.parse(res.text);
          assert.equal(resObj.string, '10 liters converts to 2.64172 gallons');
          done();
        });
  });

  test('Convert invalid unit via API', (done) => {
    chai.request(server)
        .get('/api/convert?input=32g')
        .end((err,res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid unit');
          done();
        });
  });

  test('Convert invalid number via API', (done) => {
    chai.request(server)
        .get('/api/convert?input=3/7.2/4kg')
        .end((err,res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number');
          done();
        });
  });

  test('Convert invalid number and unit via API', (done) => {
    chai.request(server)
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end((err,res) => {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'invalid number and unit');
          done();
        });
  });

  test('Convert no number input via API', (done) => {
    chai.request(server)
        .get('/api/convert?input=L')
        .end((err,res) => {
          assert.equal(res.status, 200);
          let resObj = JSON.parse(res.text);
          assert.equal(resObj.string, '1 liters converts to 0.26417 gallons');
          done();
        });
  });
});
