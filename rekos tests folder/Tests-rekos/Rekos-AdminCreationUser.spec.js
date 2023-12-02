const { test, expect } = require("@playwright/test");
const constants = require ('../src-rekos/constantsRekos')
import { LoginPage } from "../src-rekos/LoginPage";

const baseURL = constants.baseURL
const usernameAdmin = constants.usernameAdmin
const passwordAdmin = constants.passwordAdmin
const currentURL = constants.currentURL
const loggedOutPage = constants.loggedOutPage

test("Admin - Add a user", async ({ page }) => {
  

  //login
  const login = new LoginPage(page);
  await login.gotoLoginPage(baseURL);
  await login.login(usernameAdmin,passwordAdmin);
  await login.loginAssert(page,usernameAdmin);

  //Verification
  const headingText = await page
    .getByRole("heading", { name: "Výpis uživatelů" })
    .innerText();
  console.log(headingText);
  const expectedHeadintText = "VÝPIS UŽIVATELŮ";
  expect(headingText).toMatch(expectedHeadintText);
  if (headingText === expectedHeadintText) {
    console.log("Admin was succesfuly logged in");
  } else {
    console.log("Admin was not redirected right way");
  }

  //Verify if user's name is on the page
  await loggedUser(page, usernameAdmin);

  // Verify the title of the page
  const pageTitle = await page.title();
  console.log(pageTitle);
  expect(pageTitle).toMatch("Uživatelé | REKOS");

  
  //Function to add a new user to administrative part of web
  // Click on button to ADD USER
  await page.getByRole('link', { name: 'Přidat uživatele' }).click();
  // Fill in username and password (required )
  await page.locator('input[name="user\\[username\\]"]').fill('TestPlaywright');
  await page.locator('input[name="user\\[password\\]"]').fill('memos');
  // Fill in name, surname, email (Not required)
  await page.locator('input[name="user\\[firstname\\]"]').fill('Jan');
  await page.locator('input[name="user\\[surname\\]"]').fill('Novák');
  await page.locator('input[name="user\\[email\\]"]').fill('jnovak@seznam.cz');
  // Choose a role for new user
  await page.locator('select[name="user\\[role\\]"]').selectOption('expert');
  // Confirm button
  await page.getByRole('button', { name: 'Uložit uživatele' }).click();
  // Go back to home page
  await page.getByRole('link', { name: 'Zpět na seznam uživatelů' }).click();
  
  
  
  
  //Logout
  await login.logOut();
  await login.logOutAssert(loggedOutPage);
});

test("Admin - Delete a created user from previous test", async ({ page }) => {
    //Log in by using function for login
    await login(page, baseURL, usernameAdmin, passwordAdmin);
  
    //Verification
    const headingText = await page
      .getByRole("heading", { name: "Výpis uživatelů" })
      .innerText();
    console.log(headingText);
    const expectedHeadintText = "VÝPIS UŽIVATELŮ";
    expect(headingText).toMatch(expectedHeadintText);
    if (headingText === expectedHeadintText) {
      console.log("Admin was succesfuly logged in");
    } else {
      console.log("Admin was not redirected right way");
    }
  
    //Verify if user's name is on the page
    await loggedUser(page, usernameAdmin);
  
    // Verify the title of the page
    const pageTitle = await page.title();
    console.log(pageTitle);
    expect(pageTitle).toMatch("Uživatelé | REKOS");
  
    

    //Dialog accepting
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Opravdu chcete smazat uživatele')
        
        await dialog.accept();
    })
    //Clicking on a button delete
    await page.getByRole('row', { name: 'TestPlaywright jnovak@seznam.cz expert aktivní' }).getByRole('link').nth(1).click();
    
    //complete a verification
    const expectedMessage = await page.locator('#main-content div').filter({ hasText: 'Uživatel byl úspěšně smazán.' })
    expect(expectedMessage).toBeVisible();
    
    //Verification
    const expectedDeletedUser = await page.getByRole('cell', { name: 'TestPlaywright' });
    expect(expectedDeletedUser).not.toBeVisible();
    
    
    //Logout
    await login.logOut();
    await login.logOutAssert(loggedOutPage);
  });