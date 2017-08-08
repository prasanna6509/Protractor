describe('test chrome', function (){
it('test any', function(){
    browser.driver.get('http://www.gmail.com');
   
   var locat1=browser.driver.findElement(by.css('#identifierId'));
    locat1.sendKeys('prasannakp227@gmail.com');

    var locat2=browser.driver.findElement(by.css('.CwaK9'));
    locat2.click();
    browser.driver.sleep(5000);
     
   
 var locat3=browser.driver.findElement(by.css('input[name="password"]'));
  locat3.sendKeys('109e1a0227');

   browser.driver.sleep(5000);
  var locat4=browser.driver.findElement(by.xpath("//*[text()='Next']"));
  locat4.click();
   browser.driver.sleep(10000);
    });
});