import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage: 'https://stage.pasv.us/course',
      prod: 'https://coding.pasv.us/course',
      info: 'Hello world!',
      camp: 'https://play1.automationcamp.ir/',
    },

  },
  defaultCommandTimeout: 16000,
});
