class AuthenticationError extends Error {
  constructor(message) {
    super(message || 'Authentication Error');

    this.name = 'AuthenticationError';
    this.statusCode = 401;

    return this;
  }
}

module.exports = AuthenticationError;
