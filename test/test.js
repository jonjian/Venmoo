var expect = require('chai').expect;
var server = require('./..server/index.js');

describe('server', function() {
  it('should have an express server', function() {
    expect(server.app).to.not.equal(undefined);
  })
})