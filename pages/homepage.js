let homepage = function(){

    let firstnumber_input =  element(by.model('first'));
    let secondnumber_input =  element(by.model('second'));
   let Gobutton =  element(by.css('[ng-click="doAddition()"]'));


   this.get=function(url){
       browser.get(url);
   };

   this.enterFirstNumber=function(firstnum){
       firstnumber_input.sendKeys(firstnum);
   };

   this.enterSecondNumber=function(secondnum){
         secondnumber_input.sendKeys(secondnum);

   };

   this.entergo=function(){
          Gobutton.click();
   };

   this.verifyresult=function(output){

    let result= element(by.cssContainingText('.ng-binding', output));
       expect(result.getText()).toEqual(output);
   };
};
module.exports = new homepage();