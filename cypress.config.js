const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6xgybz",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implementar hooks ou listeners se necessário
    },
    baseUrl: "https://front.serverest.dev/",
  },
});