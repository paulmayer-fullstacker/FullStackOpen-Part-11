// playwright.config.js:

/* eslint-disable no-undef */
// Disables 'no-undef' rules for this entire file so ESLint won't flag 'require' or 'module'.

// Import the configuration helper and browser presets from the Playwright package.
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  // Direct Playwright where our E2E test files are located.
  testDir: "./e2e-tests",
  // Max time (ms) a single test is allowed to run before failing (30 seconds).
  timeout: 30000,
  // Shared settings applied to all tests in this suite.
  use: {
    // Set base URL so page.goto('') in tests resolves to 'http://localhost:8080/'.
    baseURL: "http://localhost:8080" // This must match our local dev server port in package.json.
  },
  // Specify which browser environments to test against.
  projects: [
    {
      name: "chromium",
      // Emulate a standard Desktop Chrome viewport and user agent.
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  // Automatically manage the local application server during testing.
  webServer: {
    // Shell command Playwright executes to launch the development server.
    command: "npm run start",
    // URL Playwright polls to verify the app is fully loaded before starting tests.
    url: "http://localhost:8080",
    // Gives Webpack up to 2 min (120s) to compile and start serving.
    timeout: 120 * 1000,
    // GitHub Actions automatically sets process.env.CI = "true" on all virtual machines.
    // So, if not process.env.CI, the test is being run locally and a running server can be used if port 8080 is already open.
    // If CI (process.env.CI), always spins up a fresh isolated server instance for each workflow run.
    reuseExistingServer: !process.env.CI
  }
});
