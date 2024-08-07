// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  
  projects: [
    {
        name: 'chrome',
        use: { 
          browserName: 'chrome',
          headless: false 
        },
      },
  ],
  timeout: 30000, 
  expect: {
    timeout: 10000, 
  },
  reporter: 'list', 
  use: {
    headless: true, 
    viewport: { width: 1280, height: 720 }, 
  },
});
