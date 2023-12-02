
const { test, expect } = require("@playwright/test");





//Function for login
async function login(page, baseURL, username, password) {
    await page.goto(baseURL);
    await page.getByLabel("Jméno:").fill(username);
    await page.getByLabel("Heslo:").fill(password);
    await page.getByRole("button", { name: "Přihlásit se" }).click();
  }


// Function for Log out
async function logout(page, loggedOutPage) {
    // Clicking on the "Odhlásit" link
    await page.getByRole("link", { name: "Odhlásit" }).click();
    // Get the current URL
    const currentURL = await page.url();
    console.log(currentURL);
    // Assert that the current URL matches the expected logged out page
    expect(currentURL).toMatch(loggedOutPage);
  }
//Function for verification
async function loggedUser(page, username) {
    const searchedArea = await page.locator("div[class='user'] p").innerText();
    expect(searchedArea).toContain(username);
  }


  module.exports = {
    loggedUser,
    login,
    logout
  }