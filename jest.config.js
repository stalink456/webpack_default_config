/* eslint-disable */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '.+\\.(png|jpg|jpeg|svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/node_modules/identity-obj-proxy',
    uuid: require.resolve('uuid'),
  },
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
};
