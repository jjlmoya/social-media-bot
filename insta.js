const puppeteer = require('puppeteer');
const Credentials = require('./configuration/credentials');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone X'];
let Instagram = require('./services/instagramService');


(function () {
    (async () => {
        const browser = await puppeteer.launch({headless: false}); // default is true
        const page = await browser.newPage();
        await page.emulate(iPhone);
        await page.goto(Instagram.locators.url);
        Instagram = Object.assign({}, Instagram, {page: page});
        await Instagram.login(Credentials.instagram.name, Credentials.instagram.password);
        await Instagram.exploreHashTag("pomelo");
        //await browser.close();
    })();
})();