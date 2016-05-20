var expect = require('chai').expect;
var subject = require('../index.js');

describe('Population Sample', function() {

  it('should return error if no params are included in function call', function() {
    expect(subject.population()).to.equal('please enter population');
  })

  it('should return error if params is not an object', function() {
    expect(subject.population('BANG, and the dirt is gone')).to.equal('please enter population');
  })

  it('should return error if params object does not contain population', function() {
    expect(subject.population({confidence: 1.5, response: 4})).to.equal('please enter population');
  })

  it('should return population sample with default params', function() {
    expect(subject.population({population: 1234})).to.equal(240);
  })

});
