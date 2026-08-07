import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
  // The pipeline checks its engine out into .pipeline/ inside the workspace
  // BEFORE running the tests, and that tree ships its own *.spec.ts fixtures
  // for NestJS and Next.js starters. testMatch is anchored at rootDir, so jest
  // collected all of them and 13 suites failed to compile against
  // dependencies this project does not have -- which marked the whole stage
  // failed while every real test passed.
  //
  // Ignoring the path rather than narrowing `roots` to src/ is deliberate:
  // the hidden-test stage runs `npx jest tests/hidden`, so that directory has
  // to stay discoverable.
  testPathIgnorePatterns: ['/node_modules/', '/\\.pipeline/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.spec.{ts,tsx}'],
};

export default config;
