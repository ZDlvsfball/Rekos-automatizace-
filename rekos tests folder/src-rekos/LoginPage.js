const { expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "//button[contains(text(),'Přihlásit se')]";
    this.searchedArea = "div[class='user'] p";
    this.logOutButton = "//a[normalize-space()='Odhlásit']";
    

  }

  async gotoLoginPage(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async loginAssert(username) {
    const searchedAreaInnerText = await this.page
      .locator(this.searchedArea)
      .innerText();
    expect(searchedAreaInnerText).toContain(username);
  }

  async logOut() {
    await this.page.locator(this.logOutButton).click();

  }

  async logOutAssert(loggedOutPage) {
    const currentURL = await this.page.url();
    console.log('Uživatel byl odhlášen a nyní se nachází na ' + currentURL)
    expect(currentURL).toMatch(loggedOutPage);


  }
};
