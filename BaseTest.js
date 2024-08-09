const { Builder } = require('selenium-webdriver');

class BaseTest {
  constructor() {
    this.driver = null;
  }

  async setup() {
    this.driver = await new Builder().forBrowser('chrome').build();
    await this.driver.manage().window().maximize();
  }

  async teardown() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

module.exports = BaseTest;
