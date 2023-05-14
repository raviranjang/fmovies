module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatters: ['/node_modules/', '<rootDir>/src/index.tsx'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['**/__tests__/**/*.{ts,tsx}'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
