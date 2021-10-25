let Registration = require('../pages/Registration')

describe('registration details', function () {

    it('enter the registration details', function () {
        Registration.get('https://www.way2automation.com/angularjs-protractor/registeration/#/login');
        Registration.enterusername('angular');
        Registration.enterpassword('password');
        Registration.enterusernamesecond('angular');
        Registration.enterlogin();
        browser.sleep(3000);
    })
});