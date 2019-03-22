module.exports = {
    locators: {
        url: 'http://www.google.es'
    },
    search: function (keywords) {
        this.driver.get(this.locators.url);
        var element = this.driver.findElement(this.selenium.By.name('q'));
        element.sendKeys(keywords);
        element.submit();
    },
    navigateToPage: function (page) {
    },
    init: function (core) {
        this.driver = core.driver;
        this.selenium = core.selenium;
    }
};