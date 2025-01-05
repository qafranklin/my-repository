const {test,expect} = require('@playwright/test')


test.beforeAll(async({browser}) =>
    
{
const context = await browser.newContext();
const page = context.newPage();
await page.goto('https://bpsweb-dev.azurewebsites.net/auth/sign-in');
await page.fill('input[name="email"]','DevAccount');
await page.fill('input[name="password"]','abcdE123');
await page.click('text=Sign in');
await context.storageState({path: 'State.json'})

})