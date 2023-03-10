// Generated by Selenium IDE
var assert = require("assert"),
webdriver = require("selenium-webdriver"),
conf_file = process.argv[3] || "conf/single.conf.js";

var caps = require("../" + conf_file).capabilities;
var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
      "mgrass" +
      ":" +
      "tKUuMLH0V4SCP8FpdrJBXGPrTMludNcN7xuHmR80CVtI6Gj7kt" +
      "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

describe('user-journey woocommerce', function() {
  var driver;
  this.timeout(0);

  beforeEach(function(done) {
    caps.name = this.currentTest.title;
    driver = buildDriver(caps);
    done();
  });

  afterEach(function(done) {
    if (this.currentTest.isPassed()) {
      driver.executeScript("lambda-status=passed");
    } else {
      driver.executeScript("lambda-status=failed");
    }
    driver.quit().then(function() {
      done();
    });
  });

  it('user-journey woocommerce', async function() {
    await driver.get("https://garaulion.fr/")
    // await driver.manage().window().setRect({ width: 1486, height: 903 })
    {
      const element = await driver.findElement(webdriver.By.linkText("BIJOUX"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(webdriver.By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).move(element, 0, 0).perform()
    }
    await driver.executeScript("window.scrollTo(0,148)")
    await driver.findElement(webdriver.By.css(".wp-image-18607")).click()
    await driver.executeScript("window.scrollTo(0,84)")
    await driver.findElement(webdriver.By.css(".product:nth-child(2) .attachment-woocommerce_thumbnail")).click()
    await driver.executeScript("window.scrollTo(0,83)")
    await driver.findElement(webdriver.By.css(".et_pb_wc_add_to_cart_1_tb_body .single_add_to_cart_button")).click()
    {
      const element = await driver.findElement(webdriver.By.css(".et_pb_wc_add_to_cart_1_tb_body .single_add_to_cart_button"))
      await driver.actions({ bridge: true }).move(element).perform()
    }
    await driver.findElement(webdriver.By.css(".woocommerce-message > .button")).click()
    await driver.executeScript("window.scrollTo(0,113)")
    await driver.findElement(webdriver.By.css(".checkout-button")).click()
    await driver.executeScript("window.scrollTo(0,84)")
    await driver.findElement(webdriver.By.id("billing_postcode")).click()
    await driver.findElement(webdriver.By.id("billing_postcode")).sendKeys("qsdq")
    await driver.findElement(webdriver.By.id("billing_city")).click()
    await driver.findElement(webdriver.By.id("billing_city")).sendKeys("Strasbourg")
    await driver.findElement(webdriver.By.id("billing_first_name")).click()
    await driver.findElement(webdriver.By.id("billing_first_name")).click()
  })
})
