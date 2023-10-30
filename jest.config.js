module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setupFilesAfterEnv.ts', '<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', './test'],
  modulePathIgnorePatterns: ['mocks'],
};
