import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = new registerUserData();

export class Testcasepage {
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

    async clickTestCasesButton() {
        await this.common.closeAdIfVisible();
        await this.common.click_element(loc.testcase);
        await this.common.closeAdIfVisible();
        
    }

    async verifyTestCasesPage() {
        await this.common.have_url(data.tCaseUrl);
    }
}