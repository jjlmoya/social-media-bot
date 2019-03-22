const Driver = rnode equire('./configuration/driver');
const Selenium = require('selenium-webdriver');
const Load = require('./configuration/loadModule');
const Instagram = Load('../service/instagramService', {
    driver: Driver,
    selenium: Selenium
});
(function () {
    var init = function () {
        Instagram.login('bonseo.es', '');
    };
    init();
})();

Driver.close();