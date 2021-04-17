module.export = {
  verbose: true, // for more detailed logs of passing/failing tests
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
};
