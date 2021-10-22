var expect = require('chai').expect;
var request = require('request');

describe('Color Code Converter API', function () {
  describe('RGB to Hex conversion', function () {
    var url = 'http://localhost:3001/api/auth/register';

    it('returns status 200', function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns the color in hex', function (done) {
      request(url, function (error, response, body) {
        expect(body).to.equal('ffffff');
        done();
      });
    });
  });

  describe('Hex to RGB conversion', function () {
    var url = 'http://localhost:3001/api/auth/login_with_phone';

    it('returns status 200', function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns the color in RGB', function (done) {
      request(url, function (error, response, body) {
        expect(body).to.equal('[0,255,0]');
        done();
      });
    });
  });
});
