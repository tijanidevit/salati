class NotFoundError extends Error {
  constructor(message) {
    super(message || 'Not Found Error');

    this.name = 'NotFoundError';
    this.statusCode = 404;

    return this;
  }
}

module.exports = NotFoundError;
