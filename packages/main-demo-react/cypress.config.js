import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://192.168.1.19:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
