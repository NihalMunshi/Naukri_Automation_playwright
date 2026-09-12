// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  use: {
    browserName: 'chromium',
  },
});

