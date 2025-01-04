const {test,expect} = require ('@playwright/test')
const LoginPage = require('./../PageObject/LoginPage');
test('Login Existing Account', async ({page}) => {
    const loginPage = new LoginPage(page);


//Navigate home Page
await loginPage.navigatePage();

//Validate Home Page
await loginPage.assertHomePage();
console.log('Assert Home Page')

//Validate Username
await loginPage.assertusername();
console.log('Assert Username')
//Input Username
await loginPage.enterusername();




})