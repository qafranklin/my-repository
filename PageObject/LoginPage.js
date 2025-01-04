

class LoginPage {

constructor(page){

    this.page = page;


}

async navigatePage(){

    await this.page.goto("https://bpsweb-dev.azurewebsites.net/auth/sign-in");

}



}
module.exports = LoginPage;