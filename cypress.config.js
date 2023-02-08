const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.fridayfinance.com',
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    scrollBehavior: 'center',
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
