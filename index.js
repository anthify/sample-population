exports.population = function(params) {

  var confidence,
      response,
      population,
      errorMargin;

  if (!params || typeof params !== 'object' || !params.population) {
    return 'please enter population';
  }

  if (params) {

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

  }

 var x = (Math.pow(confidence, 2) * response) * (100.0 - response);

 var y = (params.population - 1.0) * (Math.pow(errorMargin, 2)) + x;

 return Math.ceil(params.population * x / y / 2);

}
