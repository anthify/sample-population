exports.population = function(params) {

  var confidence,
      response,
      population,
      errorMargin;

  if (!params || typeof params !== 'object' || !params.hasOwnProperty('population')) {
    throw new Error ('please enter population');
  }

  if (params.population <= 0) {
    return 0;
  }

  confidence = params.confidence || 1.98;
  response = params.response || .50;
  errorMargin = params.errorMargin || .5;

  var x = (Math.pow(confidence, 2) * response) * (100.0 - response);

  var y = (params.population - 1.0) * (Math.pow(errorMargin, 2)) + x;

  return Math.ceil(params.population * x / y / 2);

};
