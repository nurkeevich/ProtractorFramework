import { ElementFinder, element } from "protractor";

export class GeneralUtils {
    static async uncheckRadioButton(element: ElementFinder) {
        while (element.isSelected) {
            element.click();
        }
    }
    static async checkRadioButton(element: ElementFinder) {
        while (!element.isSelected) {
            element.click()
        }
    }


}