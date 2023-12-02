
//konstanty pro veřejnou část Rekosu
const baseURLPublic = "https://psp-t-app.memos.cz/~rekos/";
const searchedCity = "Dobříš";


//konstanty pro administrativní část Rekosu
const baseURL = "https://psp-t-app.memos.cz/~rekos/login";
const loggedOutPage = "https://psp-t-app.memos.cz/~rekos/";
const currentURL = null;



//Admin account
const usernameAdmin = "testAdmin";
const passwordAdmin = "memos";
//Editor account
const usernameEditor = "testEditor";
const passwordEditor = "memos";
//Protokol account
const usernameProtokol = "testProtokol";
const passwordProtokol = "memos";
//Expert account
const usernameExpert = "testExpert";
const passwordExpert = "memos";

//Editor creaton of new apply
const cityFirstLetter = 'b';
const city = 'Bácovice'


module.exports = {
    loggedOutPage,
    baseURL,
    currentURL,
    usernameAdmin,
    passwordAdmin,
    usernameEditor,
    passwordEditor,
    usernameExpert,
    passwordExpert,
    usernameProtokol,
    passwordProtokol,
    baseURLPublic,
    searchedCity,
    cityFirstLetter,
    city
  };