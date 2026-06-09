import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Read from ".env" file at the project root
dotenv.config({ path: path.resolve(__dirname, '.env') });



module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  reporter: [
    ['html']
  ]
});


