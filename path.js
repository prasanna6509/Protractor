//finding xpaths


var select=function(){

    this.path=function(){   
        var c =browser.driver.findElement(by.xpath("//input[@id='twotabsearchtextbox']"));
        c.sendKeys('iphone');
    };

    this.path1 = function(){
        var c1=browser.driver.findElement(by.xpath("//input[@type='submit']"));
        c1.click();

    };

};


    
module.exports = new select();


