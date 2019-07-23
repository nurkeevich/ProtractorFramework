import { defineSupportCode } from "cucumber";
import { browser } from "protractor";


defineSupportCode(({Given}) => {
    Given('User at facebook login page', async() => {
        browser.get("https://www.facebook.com");
    });
})