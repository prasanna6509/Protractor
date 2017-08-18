//POM for Protractor //
describe('test chrome', function (){
    var homePage = require('./homePage.js');
    var path=require('./path.js');

    it('homePage', function(){
                homePage.loadURL();
                // browser.waitForAngularEnabled(false);
                // browser.get('/non-angular-login-page.html');
                browser.manage().timeouts().implicitlyWait(12000);
         });

    it('path', function(){
            path.path();
            path.path1();
    });


});
