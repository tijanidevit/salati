class ValidationError extends Error {
  constructor(message, code, details) {
    super(message || 'Validation Error');

    this.name = 'ValidationError';
    this.code = code;
    this.details = details;
    this.statusCode = 400;

    return this;
  }
}

module.exports = ValidationError;
