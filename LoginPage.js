class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = { id: 'username' };
    this.passwordField = { id: 'password' };
    this.loginButton = { id: 'login-in' };
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
    await this.driver.findElement(this.passwordField).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }
}

module.exports = LoginPage;
