const { test, expect } = require("@playwright/test");
const constants = require('../src-rekos/constantsRekos');


const baseURL = constants.baseURL;
const loggedOutPage = constants.loggedOutPage;
const currentURL = null;

const usernameAdmin = constants.usernameAdmin;
const passwordAdmin = constants.passwordAdmin;

const usernameEditor = constants.usernameEditor;
const passwordEditor = constants.passwordEditor;

const usernameExpert = constants.usernameExpert;
const passwordExpert = constants.passwordExpert;

const usernameProtokol = constants.usernameProtokol;
const passwordProtokol = constants.passwordProtokol;





test("Admin - Basic opening loginpage test", async ({ page }) => {
  
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

  //Logout
  await login.logOut();
  await login.logOutAssert(loggedOutPage);
});

test("Editor - Basic opening loginpage test", async ({ page }) => {
  //Log in by using function for login
  await login(page, baseURL, usernameEditor, passwordEditor);

  //Verification
  const headingText = await page
    .getByRole("heading", { name: "Evidenční údaje" })
    .innerText();
  console.log(headingText);
  const expectedHeadintText = "EVIDENČNÍ ÚDAJE";
  expect(headingText).toMatch(expectedHeadintText);
  if (headingText === expectedHeadintText) {
    console.log("Editor was succesfuly logged in");
  } else {
    console.log("Editor was not redirected right way");
  }

  //Verify if user's name is on the page
  await loggedUser(page, usernameEditor);

  // Verify the title of the page
  const pageTitle = await page.title();
  console.log(pageTitle);
  expect(pageTitle).toMatch("REKOS");

 //Logout
 await login.logOut();
 await login.logOutAssert(loggedOutPage);
});

test("Expert - Basic opening loginpage test", async ({ page }) => {
  //Log in by using function for login
  await login(page, baseURL, usernameExpert, passwordExpert);

  //Verification 1
  const headingText = await page
    .getByRole("heading", { name: "Evidenční údaje" })
    .innerText();
  console.log(headingText);
  const expectedHeadintText = "EVIDENČNÍ ÚDAJE";
  expect(headingText).toMatch(expectedHeadintText);
  if (headingText === expectedHeadintText) {
    console.log("Editor was succesfuly logged in");
  } else {
    console.log("Editor was not redirected right way");
  }

  //Verify if user's name is on the page
  await loggedUser(page, usernameExpert);

  // Verify the title of the page
  const pageTitle = await page.title();
  console.log(pageTitle);
  expect(pageTitle).toMatch("REKOS");

  //Logout
  await login.logOut();
  await login.logOutAssert(loggedOutPage);
});

test("Protokol - Basic opening loginpage test", async ({ page }) => {
  //Log in by using function for login
  await login(page, baseURL, usernameProtokol, passwordProtokol);

  //Verification 1
  const headingText = await page
    .getByRole("heading", { name: "Evidenční údaje" })
    .innerText();
  console.log(headingText);
  const expectedHeadintText = "EVIDENČNÍ ÚDAJE";
  expect(headingText).toMatch(expectedHeadintText);
  if (headingText === expectedHeadintText) {
    console.log("Editor was succesfuly logged in");
  } else {
    console.log("Editor was not redirected right way");
  }
  //Verify if user's name is on the page
  await loggedUser(page, usernameProtokol);

  // Verify the title of the page
  const pageTitle = await page.title();
  console.log(pageTitle);
  expect(pageTitle).toMatch("REKOS");

 //Logout
 await login.logOut();
 await login.logOutAssert(loggedOutPage);
});
