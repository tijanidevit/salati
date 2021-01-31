module.exports = {
  restoreMocks: true,
  clearMocks: true,
  testMatch: ['**/*.test.js'],
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/logs/',
    '/coverage/',
  ],
  testURL: 'http://localhost:3000',
};
