module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/src/test-util/svgTransform.js',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['./src/test-util/setupTest.ts'],
  globalSetup: './src/test-util/globalSetup.js',
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '<rootDir>/**/*.tsx',
    '!<rootDir>/__tests__/**/*.ts',
    '!<rootDir>/__tests__/**/*.tsx',
    '!<rootDir>/**/*.d.ts',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/../coverage',
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
};
