const HttpStatus = require('./HttpStatus');

function getResponse(
  options = {
    success: {},
  }
) {
  const response = {};

  response[HttpStatus.OK] = options.success || {};

  if (options.notFound) {
    response[HttpStatus.NOT_FOUND] = options.notFound;
  }

  if (options.validation) {
    response[HttpStatus.VALIDATION] = options.validation;
  }

  if (options.authorization) {
    response[HttpStatus.AUTHORIZATION] = options.authorization;
  }

  if (options.authentification) {
    response[HttpStatus.AUTHENTIFICATION] = options.authentification;
  }

  return response;
}

module.exports = {
  getResponse,
};
