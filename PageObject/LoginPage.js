const { expect } = require('@playwright/test');

class LoginPage {

constructor(page){

    this.page = page;
    this.homepageurl = 'https://bpsweb-dev.azurewebsites.net/auth/sign-in';
    this.homepagetitle = 'BizBox Profiling System';
    this.username = '#email';
    this.password = '#password';
    this.showpassword = "button[aria-label='toggle password visibility'] svg";
    this.rememberpass = "input[type='checkbox']";



}

async navigatePage(){

    await this.page.goto("https://bpsweb-dev.azurewebsites.net/auth/sign-in");

}

async assertHomePage(){

    await expect(this.page).toHaveURL(this.homepageurl);
    await expect(this.page).toHaveTitle(this.homepagetitle);
    
    await expect(this.page.locator(this.password)).toBeVisible();
    await expect(this.page.locator(this.showpassword)).toBeVisible();
    await expect(this.page.locator(this.rememberpass)).toBeVisible();
}

async assertusername (){
    await expect(this.page.locator(this.username)).toBeVisible();
    await expect(this.page.locator(this.username)).toBeEnabled();
}
async enterusername (){
    await this.page.fill(this.username, 'DevAccount');

}
}
module.exports = LoginPage;