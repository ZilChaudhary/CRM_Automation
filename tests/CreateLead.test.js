// tests/leads.test.js
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const { LoginPage } = require('../pages/loginpage');
const { LeadsPage } = require('../pages/leadsPage');
const { CommonFunctions } = require('../commonfunction');
const testData = JSON.parse(fs.readFileSync('resources\\CreateLead.json', 'utf8'));

test.describe('Zoho Leads Page Tests', () => {
  let page
  let loginPage;
  let leadsPage;
  

  // Setup before each test
  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    loginPage = new LoginPage(page);
    leadsPage = new LeadsPage(page);

    // Perform login
    await loginPage.login();
    await leadsPage.navigateToLeadsPage();
  });

  test('Create Lead - Last Name Missing Error', async () => {
    const data = testData['Create Lead - Last Name Missing Error'];
    await leadsPage.createLead(data);
    await leadsPage.lastnameMissingError();
  })

  test('Create Lead - Company Missing Error', async () => {
    const data = testData['Create Lead - Company Missing Error'];
    await leadsPage.createLead(data);
    await leadsPage.companyMissingError();
  })

  test('Create Lead - Success', async () => {
    const data = testData['Create Lead - Success'];
    await leadsPage.createLead(data);
  })


});
