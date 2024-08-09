const BaseTest = require('./BaseTest');
const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
const assert = require('assert');

(async function homePageTest() {
  const baseTest = new BaseTest();
  await baseTest.setup();

  try {
    const driver = baseTest.driver;
    await driver.get('https://sakshingp.github.io/assignment/login.html');
    const loginPage = new LoginPage(driver);
    await loginPage.login('validUsername', 'validPassword');

    const homePage = new HomePage(driver);
    await homePage.clickAmountHeader();
    const transactionAmounts = await homePage.getTransactionAmounts();

    // Verify that the amounts are sorted
    for (let i = 0; i < transactionAmounts.length - 1; i++) {
      assert.ok(transactionAmounts[i] <= transactionAmounts[i + 1]);
    }
  } finally {
    await baseTest.teardown();
  }
})();
