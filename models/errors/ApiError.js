class ApiError extends Error {
  constructor(message, error) {
    super(message || 'API error', error);

    this.name = 'ApiError';
    this.statusCode = 500;

    return this;
  }
}

module.exports = ApiError;
