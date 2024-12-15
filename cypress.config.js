const { defineConfig } = require("cypress");

const dotEnvPath = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env'
require('dotenv').config({
   path: dotEnvPath,
   override: true 
  })

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: '.',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);

      
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      config.env = {
        ...process.env
      }
      return config;
    }
  },
});
