const Driver = require('./configuration/driver');
const Selenium = require('selenium-webdriver');
const Load = require('./configuration/loadModule');
const Google = Load('../service/googleService', {
    driver: Driver,
    selenium: Selenium
});
(function () {
    var init = function () {
        Google.search('¿Qué tal?');
    };
    init();
})();

Driver.close();