// pages/loginPage.js
const { expect } = require('@playwright/test');

class CommonFunctions {
  
  constructor(page) {
    this.page = page;
  }

  async clickSelector(selector,data){
    const dynamicSelector = selector.replace('${value}', data);
    await this.page.locator(dynamicSelector).click();
  }

}

module.exports = { CommonFunctions };
