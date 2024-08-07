// pages/loginPage.js
const { expect } = require('@playwright/test');
const { leadsUrl } = require('../env');
const { CommonFunctions } = require('../commonfunction');

class LeadsPage {

  constructor(page) {
    this.page = page;
    this.commonFunctions = new CommonFunctions(page);
    this.usernameInput = page.locator('//input[@id="login_id"]');
    this.createleadbtn = page.locator('//button[@cscript-id="system_button"]');
    this.leadheading = page.locator('(//div[@id="sectitle"])[1]');
    this.titledrpdown = page.locator('(//lyte-icon[@class="dropdown"])[2]');
    this.title = '//lyte-drop-item[@data-value="${value}"]';
    this.inputfirstname = page.locator('//input[@id="Crm_Leads_FIRSTNAME_LInput"]');
    this.inputlastname = page.locator('//input[@id="Crm_Leads_LASTNAME_LInput"]');
    this.inputcompany = page.locator('(//input[@id="inputId"])[2]');
    this.savebtn = page.locator('//button[@name="save"]');
    this.lastnameerror = page.locator('//span[@id="errorMsg_Crm_Leads_LASTNAME"]');
    this.companyerror = page.locator('//span[@id="errorMsg_Crm_Leads_COMPANY"]');
  }

  async navigateToLeadsPage() {
    await this.page.goto(leadsUrl);
  }

  async createLead(testcasedata){
    await this.createleadbtn.click();
    await this.leadheading.waitFor({ state: 'visible' });
    await this.titledrpdown.click();
    await this.commonFunctions.clickSelector(this.title,testcasedata.title);
    await this.inputfirstname.click();
    await this.inputfirstname.fill(testcasedata.firstname);
    await this.inputlastname.click();
    await this.inputlastname.fill(testcasedata.lastname);
    await this.inputcompany.click();
    await this.inputcompany.fill(testcasedata.company);
    await this.savebtn.click();
  }

  async lastnameMissingError(){
    await this.lastnameerror.waitFor({ state: 'visible' });
    await expect(this.lastnameerror).toBeVisible();
  }

  async companyMissingError(){
    await this.companyerror.waitFor({ state: 'visible' });
    await expect(this.companyerror).toBeVisible();
  }
}

module.exports = { LeadsPage };
