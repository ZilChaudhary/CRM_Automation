// pages/loginPage.js
const { expect } = require('@playwright/test');
const { username, password, loginUrl } = require('../env');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('//input[@id="login_id"]');
    this.passwordInput = page.locator('//input[@id="password"]');
    this.submitButton = page.locator('//button[@id="nextbtn"]');
    this.welcomeText = page.locator('//div[@class="cob_welcomeTxt pR"]');
  }

  async login() {
    await this.page.goto(loginUrl);
    await this.usernameInput.fill(username);
    await this.submitButton.click();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.welcomeText.waitFor({ state: 'visible' });
  }
}

module.exports = { LoginPage };
