const { test, expect } = require("@playwright/test");
const constants = require('../src-rekos/constantsRekos');

const { request } = require("http");
import { LoginPage } from "../src-rekos/LoginPage";


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
    await login.loginAssert(usernameEditor);


    //Logout
    await login.logOut();
    await login.logOutAssert(loggedOutPage);


});