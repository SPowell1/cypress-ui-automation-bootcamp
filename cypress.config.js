const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    // Activity 5
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/test/**/*.cy.{js,jsx,ts,tsx}',

    // Activity 7
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
    },
    
    chromeWebSecurity: false
  },
  env: {
    apiKey: process.env.API_KEY,
  }
});
