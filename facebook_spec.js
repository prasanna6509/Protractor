describe('Facebook', function (){
it('dropdown', function(){
    browser.driver.get('http://www.facebook.com');
    browser.manage().timeouts().implicitlyWait(5000);
   
var locat1=browser.driver.findElement(by.xpath("//input[@type='text']"));
    locat1.sendKeys('pras');

var locat2=browser.driver.findElement(by.xpath("//input[@name='lastname']"));
    locat2.sendKeys('kas');

var locat3=browser.driver.findElement(by.xpath("//input[@name='reg_email__']"));
    locat3.sendKeys('kas.pras@gmail.com');

var locat4=browser.driver.findElement(by.xpath("//input[@name='reg_passwd__']"));
    locat4.sendKeys('1234');
   
var locat5=browser.driver.findElement(by.xpath("//div[@class='_5k_5']/span/span/select[@id='month']"));
    locat5.sendKeys('Feb');

var locat6=browser.driver.findElement(by.xpath("//div[@class='_5k_5']/span/span/select[@id='day']"));
    locat6.sendKeys('16');

var locat7=browser.driver.findElement(by.xpath("//div[@class='_5k_5']/span/span/select[@id='year']"));
    locat7.sendKeys('1993');
browser.driver.sleep(10000);


    });
});