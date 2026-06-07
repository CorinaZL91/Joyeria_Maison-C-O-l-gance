module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: {
    '^\\.\\./\\.\\./generated/prisma/client\\.js$': '<rootDir>/src/__tests__/mocks/prismaClient.ts',
    '^\\.\\./\\.\\./generated/prisma/enums$': '<rootDir>/src/__tests__/mocks/prismaClient.ts',
    '^\\.\\./\\.\\./generated/prisma/enums\\.js$': '<rootDir>/src/__tests__/mocks/prismaClient.ts',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/services/**/*.ts',
    'src/middlewares/**/*.ts',
    'src/utils/**/*.ts',
    '!src/services/order.service.ts',
    '!src/middlewares/upload.middleware.ts',
    '!src/utils/cloudinaryUpload.ts',
    '!src/utils/cloudinaryDestroy.ts',
    '!src/utils/stockAlert.util.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/generated/'],
  coverageThreshold: {
    global: { branches: 90, functions: 90, lines: 90, statements: 90 },
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
};
