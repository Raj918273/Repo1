let Registration = function () {

    let username = element(by.model('Auth.user.name'));
    let password = element(by.model('Auth.user.password'));
    let usernameSecond = element(by.model('model[options.key]'));
    var login = element(by.css('[ng-click="Auth.login()"]'));

    this.get = function (url) {
        browser.get(url);
    };
    this.enterusername = function (user) {
        username.sendKeys(user);
    };
    this.enterpassword = function (pass) {
        password.sendKeys(pass)
    };
    this.enterusernamesecond = function (usersecond) {
        usernameSecond.sendKeys(usersecond)
    };
    this.enterlogin = function () {
        login.click();
    };
};
module.exports =new Registration();