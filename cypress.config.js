const { defineConfig } = require("cypress");

require('dotenv').config({
   path: '.env',
   override: true 
  })

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);

      config.env = {
        ...process.env
      }

      return config;
    }
  },
});
