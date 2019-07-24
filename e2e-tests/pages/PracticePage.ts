import { element, by } from "protractor";
import { GeneralUtils } from "../utils/GeneralUtils";

export class PracticePage {
    public radioButton(car: string) {
        return element(by.xpath(`//input[@type='radio'][@value='${car.toLowerCase()}']`))
    }

    async checkRadioButton(car: string, shouldBeChecked: Boolean) {
        shouldBeChecked ? GeneralUtils.checkRadioButton(this.radioButton(car)) : GeneralUtils.uncheckRadioButton(this.radioButton(car))
    }

}
