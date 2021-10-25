let homepage = require('../pages/homepage')

describe('demo calc app',function(){

    it('addition test',function(){
        
        homepage.get('http://juliemr.github.io/protractor-demo/');

        
        homepage.enterFirstNumber('3')
       
        homepage.enterSecondNumber('7')
       
       homepage.entergo();
        browser.sleep(3000);
       
       homepage.verifyresult('10');

    });
    it('subtraction test',function(){
        
        homepage.get('http://juliemr.github.io/protractor-demo/');

        
        homepage.enterFirstNumber('3')
       
        homepage.enterSecondNumber('7')
       
       homepage.entergo1();
        browser.sleep(3000);
       
       homepage.verifyresult('10');

    });

});