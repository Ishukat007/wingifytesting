class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.amountHeader = { id: 'amountHeader' };
    this.transactionAmounts = { css: '.transactionAmount' };
  }

  async clickAmountHeader() {
    await this.driver.findElement(this.amountHeader).click();
  }

  async getTransactionAmounts() {
    const elements = await this.driver.findElements(this.transactionAmounts);
    const amounts = [];
    for (let element of elements) {
      const text = await element.getText();
      amounts.push(parseFloat(text.replace('$', '')));
    }
    return amounts;
  }
}

module.exports = HomePage;
