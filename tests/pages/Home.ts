import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = registerUserData;

export class Homepage {

    private page: Page;
    private common: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.common = new CommonMethods(page);
    }

    async navigateToWebsite() {
        await this.common.goto_url(data.weburl);
    }

    async verifyHomePage() {
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);
    }

    async verifyscroller() {
        await this.common.scroll_to_element(loc.footer);
        await this.common.be_visible(loc.homeSubscription);
    }

    async enterSubscriptionEmail() {
        await this.common.enter_text(loc.inputemailsubscription, data.email);
    }

    async clickSubscriptionButton() {
        await this.common.click_element(loc.subbtn);
    }

    async verifySubscriptionMessage() {
        await this.common.be_visible(loc.submessage);
    }

    async fullfleadge() {
        await this.common.be_visible(loc.fullfleadge);
    }

    async scrollup() {
        await this.common.click_element(loc.scrollup);
    }

    async scrollupwithoutarrow() {
        await this.common.scroll_to_element(loc.fullfleadge);
        await this.common.be_visible(loc.fullfleadge);
    }

}