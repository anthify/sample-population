exports.population = function(population, confidence, response, errorMargin) {
  if (!confidence) {
    confidence = 1.98;
  }
  if (!response) {
    response = .50;
  }
  if (!errorMargin) {
    errorMargin = .5;
  }
 var x = (Math.pow(confidence, 2) * response) * (100.0 - response);
 var y = (population - 1.0) * (Math.pow(errorMargin, 2)) + x;
 return Math.ceil(population * x / y / 2);
}
