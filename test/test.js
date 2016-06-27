var expect = require('chai').expect;
var subject = require('../index.js');

describe('Population Sample', function() {
  it('should return error if no params are included in function call', function() {
    var fn = function() {
       subject.population()
    }
    expect(fn).to.throw('please enter population');
  })

  it('should return error if params is not an object', function() {
    var fn = function() {
       subject.population('BANG, and the dirt is gone')
    }
    expect(fn).to.throw('please enter population');
  })

  it('should return error if params object does not contain population', function() {
    var fn = function() {
      console.log('checkout', subject.population({confidence: 1.5, response: 4}))
    }
    expect(fn).to.throw('please enter population');
  })

  it('should return population sample with default params', function() {
    expect(subject.population({population: 1234})).to.equal(240);
  })

  it('should return zero if population is zero', function() {
    expect(subject.population({population: 0})).to.equal(0);
  })
});
