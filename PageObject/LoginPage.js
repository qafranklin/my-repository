

class LoginPage {

constructor(page){

    this.page = page;


}

async navigatePage(){

    await this.page.goTo('https://bpsweb-dev.azurewebsites.net/auth/sign-in');

}



}
module.exports = LoginPage;