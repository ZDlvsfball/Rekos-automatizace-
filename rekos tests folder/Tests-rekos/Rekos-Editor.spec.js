const { test, expect } = require("@playwright/test");
const constants = require('../src-rekos/constantsRekos');



const baseURL = constants.baseURL;
const loggedOutPage = constants.loggedOutPage;
const currentURL = null;
//Editor account
const usernameEditor = constants.usernameEditor;
const passwordEditor = constants.passwordEditor;
//apply
const cityFirstLetter = constants.cityFirstLetter
const city = constants.city;



test("Editor ", async ({ page }) => {
  

   //Login
   const login= new LoginPage(page);
   await login.gotoLoginPage(baseURL);
   await login.login(usernameEditor,passwordEditor);
   await login.loginAssert(page,usernameEditor);

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

  // Editor creates new apply
  //Clicking on a button "Nová žádost"
  await page.getByRole("link", { name: "Nová žádost" }).click();
  
  
 //Obec
await page.locator("#form-request-municipality-id").fill("Aš");











 


  
  
  
  //Pověřená obec
 const selectbox = await page.locator('#form-request-pou-id');
await selectbox.click();

const optionValue = '809'; // Hodnota, kterou chcete vybrat
await page.selectOption('#form-request-pou-id', { value: optionValue });







    // nahraďte 'https://psp-t-app.memos.cz/~rekos/new-request' URL vaší stránky

  // interagujte se stránkou (např. vyplňte a odešlete formulář)
  // ...




  /*
  await page.getByText(city).click();


  //Filling a name who is responsible for administrative of city above
  await page.locator('input[name="addressname"]').fill("Jan Novák");
  //Form - email
  await page.locator('input[name="addressemail"]').fill("jnovak@seznam.cz");
  //Form - Adress 1
  await page.locator('input[name="addressaddressline1"]').fill("Novákova 233");
  //Form - Adress 2
  await page.locator('input[name="addressaddressline2"]').fill("Bdeněves");
  //Form Postal code
  await page.locator('input[name="addresspostalcode"]').fill("111111")
  //Form tel
  await page.locator('input[name="addressphone"]').fill("123456789");

  
  //Clicking on a save button
  await page.getByRole("button", { name: "Uložit žádost" }).first().click();

  
  await page.locator('input[name="addresspostalcode"]').fill("11111");
  await page.getByRole("button", { name: "Uložit žádost" }).first().click();
  await page.getByText("Žádost byla vytvořena.").click();
  await page.getByRole("button", { name: "Uložit žádost" }).first().click();
  await page.getByRole("link", { name: "Žádosti k projednání" }).click();
  await page.getByRole("link", { name: "Vyhledání žádosti" }).click();
  await page
    .getByRole("row", {
      name: "0370/9VO/22/PpHaV Bdeněves Město Touškov Plzeň-sever ZV Přijatá",
    })
    .getByRole("checkbox")
    .check();

  //Logout
    await login.logOut();
    await login.logOutAssert(loggedOutPage); */
});
