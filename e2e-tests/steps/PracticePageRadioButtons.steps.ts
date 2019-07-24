import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { PracticePage } from "../pages/PracticePage";

var practicePage = new PracticePage()

defineSupportCode(({ Given, Then }) => {
    Given('User at Practice page', async () => {
        // console.log("this is given method".toUpperCase())
        await browser.get("https://learn.letskodeit.com/p/practice");
    });



    Then('User should see {string}', async (string) => {
       await console.log("\nis selected: ".toUpperCase, practicePage.radioButton("BMW").isSelected());
    });
})