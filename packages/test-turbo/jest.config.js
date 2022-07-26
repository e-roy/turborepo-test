const config = {
  preset: "ts-jest/presets/js-with-ts",
  testMatch: ["**/?(*.)(spec|test).{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "dist/",
    "./index.ts",
    "./utils/*",
    "./coverage/*",
    "./theme/*",
    "./common/*",
    "./jest.config",
    "./common/index.ts",
    "./components/index.ts",
    "./elements/index.ts",
  ],
  collectCoverageFrom: ["**/*.{js,ts,tsx,jsx}", "!**/*.stories.*"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFilesAfterEnv: ["./utils/setup.ts"],
  testEnvironment: "jsdom",
};

module.exports = config;
