import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = registerUserData;

export class Contactuspage {

    private page: Page;
    private common: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.common = new CommonMethods(page);
    }

    // TEST CASE 6: CONTACT US FORM

    async contactUS() {
        // Original Contact Us implementation was commented out.
    }

}