const { test, expect } = require("@playwright/test");
const constants = require('../src-rekos/constantsRekos');
const { login, logout, loggedUser } = require('../src-rekos/testBaseRekos');
const { request } = require("http");


const baseURL = constants.baseURL;
const loggedOutPage = constants.loggedOutPage;
const currentURL = null;
//Editor account
const usernameEditor = constants.usernameEditor;
const passwordEditor = constants.passwordEditor;
//apply
const cityFirstLetter = constants.cityFirstLetter
const city = constants.city;





test("Editor ", async ({ request }) => {

    const response = await request.get('https://psp-t-app.memos.cz/~rekos/ajax');
    console.log(await response.json());


});