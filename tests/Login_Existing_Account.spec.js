const {test,expect} = require ('@playwright/test')
const LoginPage = require('./../PageObject/LoginPage');
test('Login Existing Account', async ({page}) => {
    const loginPage = new LoginPage(page);

await loginPage.navigatePage();




})