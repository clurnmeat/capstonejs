require("module");
const { Builder, By, Key, until } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const screen = {
  width: 640,
  height: 480,
};

module.exports = {
  changeMap: async (req, res) => {
    let driver;

    try {
      driver = await new Builder()
        .forBrowser("firefox")
        .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
        .build();

      await driver.get("http://google.com/maps");
      await driver
        .findElement(By.id("searchboxinput"))
        .sendKeys(` Masonic lodges near ${req.params.zipcode}`, Key.ENTER);
      await driver.wait(until.elementLocated(By.className("hfpxzc")), 6000);
      let btn = await driver.findElement(By.className("hfpxzc"));
      let aria_label = await btn.getAttribute("aria-label");

      res
        .status(200)
        .send(
          `Your local lodge is ${aria_label}, the directions have been sent to your phone.`
        );
    } catch (error) {
      console.error(error);
      res.status(500).send("There was an error processing your request.");
    } finally {
      if (driver) {
        await driver.quit();
      }
    }
  },
};
