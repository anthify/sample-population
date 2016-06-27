exports.population = function(params) {

  var confidence,
      response,
      population,
      errorMargin;

  if (!params || typeof params !== 'object' || params.population === 'undefined') {
    throw new Error ('please enter population');
  }

  if (typeof params === 'object') {
    if (params.population === 0) {
      return 0;
    }
    if (!params.population) {
      throw new Error ('please enter population');
    }
  }

  if (!params.confidence) {
    confidence = 1.98;
  } else {
    confidence = params.confidence;
  }

  if (!params.response) {
    response = .50;
  } else {
    response = params.response;
  }

  if (!params.errorMargin) {
    errorMargin = .5;
  } else {
    errorMargin = params.errorMargin;
  }

 var x = (Math.pow(confidence, 2) * response) * (100.0 - response);

 var y = (params.population - 1.0) * (Math.pow(errorMargin, 2)) + x;

 return Math.ceil(params.population * x / y / 2);

}
