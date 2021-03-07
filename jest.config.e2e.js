module.exports = {
  testEnvironment: 'node',
  restoreMocks: true,
  clearMocks: true,
  testMatch: ['**/e2e/*.spec.js'],
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/config/', '/logs/', '/coverage/'],
  testURL: 'http://localhost:3000',
};
