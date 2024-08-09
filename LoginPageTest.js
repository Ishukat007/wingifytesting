const BaseTest = require('./BaseTest');
const LoginPage = require('./LoginPage');
const assert = require('assert');

(async function loginPageTest() {
  const baseTest = new BaseTest();
  await baseTest.setup();

  try {
    const driver = baseTest.driver;
    await driver.get('https://sakshingp.github.io/assignment/login.html');
    const loginPage = new LoginPage(driver);

    // Test login with valid credentials
    await loginPage.login('validUsername', 'validPassword');
    assert.ok(await driver.getTitle().includes('Home Page Title')); // Update with actual title

    // Test login with invalid credentials
    await driver.get('https://sakshingp.github.io/assignment/login.html');
    await loginPage.login('invalidUsername', 'invalidPassword');
    assert.ok(await driver.findElement({ id: 'error' }).isDisplayed()); // Update with actual error element
  } finally {
    await baseTest.teardown();
  }
})();
