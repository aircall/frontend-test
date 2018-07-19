module.exports = {
  setupFiles: [
    '<rootDir>/test-setup.js',
  ],
  verbose: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'jsx',
    'js',
  ],
  testMatch: [
    '**/*.spec.(jsx|js)',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
