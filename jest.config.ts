module.exports = {
    preset: 'ts-jest', // for TypeScript support
    testEnvironment: 'jsdom', // simulate a browser environment
    globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.app.json',  // Path to your TypeScript config
        },
      }, 
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  