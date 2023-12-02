const { test, expect } = require("@playwright/test");
const constants = require('../src-rekos/constantsRekos');


const baseURLPublic = constants.baseURLPublic;
const searchedCity = constants.searchedCity;



test("Basic opening page test", async ({ page }) => {
  //Opening page
  await page.goto(baseURLPublic);

  //Verification of home page by correct URL
  await expect(page).toHaveURL(baseURLPublic);

  // Verification of home page by correct Title
  const expectedTitle = "Registr komunálních symbolů";
  const realTitle = await page.title();
  console.log(realTitle);
  expect(realTitle).toBe(expectedTitle);
  if (realTitle === expectedTitle) {
    console.log("Succes");
  } else {
    console.log("Nope, It is not a same title(text)");
  }
});

test("Symbol searching", async ({ page }) => {
  //Opening page
  await page.goto(baseURLPublic);

  //Verification of home page by correct URL
  await expect(page).toHaveURL(baseURLPublic);

  // Verification of home page by correct Title
  const expectedTitle = "Registr komunálních symbolů";
  const realTitle = await page.title();
  console.log(realTitle);
  expect(realTitle).toBe(expectedTitle);
  if (realTitle === expectedTitle) {
    console.log("Succes");
  } else {
    console.log("Nope, It is not a same title(text)");
  }

  //Going to tab "Vyhledávání"
  await page.getByRole("link", { name: "Vyhledání symbolu" }).click();
  await page.locator('input[name="obec"]').click();
  await page.locator('input[name="obec"]').fill(searchedCity);
  await page.getByRole("button", { name: "Hledat" }).click();
  //Verification
  const tableTextContent = await page
    .locator("//table[@class='zebra']")
    .innerText();
  console.log(tableTextContent);
  expect(tableTextContent).toContain(searchedCity);
  // Clicking on searched city for detail info
  await page.getByRole("link", { name: searchedCity }).click();
  //Verification by URL
  const url = await page.url();
  console.log(`Actual adress is ${url}`);
  expect(url).toContain("detail-symbolu");
});


test("Going into 'Informace' tab", async ({ page }) => {
    //Opening page
    await page.goto(baseURLPublic);
  
    //Verification of home page by correct URL
    await expect(page).toHaveURL(baseURLPublic);
  
    // Verification of home page by correct Title
    const expectedTitle = "Registr komunálních symbolů";
    const realTitle = await page.title();
    console.log(realTitle);
    expect(realTitle).toBe(expectedTitle);
    if (realTitle === expectedTitle) {
      console.log("Succes");
    } else {
      console.log("Nope, It is not a same title(text)");
    }

    //Going into Informace tab
    await page.getByRole("link", { name: "Informace", exact: true }).click();
    //Verification of URL 
    const url = await page.url();
    console.log(`Actual adress is ${url}`);
    expect(url).toContain('informace');


  });

  test("Negativ testcase - 404 page control", async ({ page }) => {
    //Opening page
    await page.goto(baseURLPublic);
  
    //Verification of home page by correct URL
    await expect(page).toHaveURL(baseURLPublic);
  
    // Verification of home page by correct Title
    const expectedTitle = "Registr komunálních symbolů";
    const realTitle = await page.title();
    console.log(realTitle);
    expect(realTitle).toBe(expectedTitle);
    if (realTitle === expectedTitle) {
      console.log("Succes");
    } else {
      console.log("Nope, It is not a same title(text)");
    }

    //Try to simulate wrong url 
    const wrongURL = baseURLPublic + 'nonsence'
    console.log(wrongURL);
    await page.goto(wrongURL);
    const notFoundText = await page.locator("div[class='content'] h1").innerText();
    console.log(notFoundText);
    //Verification
    await expect(await page.locator("div[class='content'] h1")).toHaveText(notFoundText);



  });