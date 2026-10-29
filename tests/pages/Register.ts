import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData,  } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = new registerUserData();

export class registerpage {

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

    async clciksignupLogin() {
        await this.common.click_element(loc.signupLogin, 'Signup/Login button');
    }

    async verifyNewUserSignup() {
        await this.common.be_visible(loc.newUserSignup);
    }

    async signupName() {
        await this.common.enter_text(loc.signupName, data.rendomname, "Name Box");
    }

    async signupName2() {
        await this.common.enter_text(loc.signupName, data.rendome3);
    }

    async signupEmail(email?: string) {
        const randomEmail = email || data.randomeEmail;
        await this.common.enter_text(loc.signupEmail,randomEmail, "Email Box");
        return randomEmail; // Return the generated email for later use
    }

    async signupEmail2() {
        await this.common.enter_text(
            loc.signupEmail,
            data.rendome2email
        );
    }

    async clickSignupButton() {
        await this.common.click_element(loc.signupButton);
    }

    async verifyAccountInformation() {
        await this.common.be_visible(loc.enterAccountInformation);
    }

    async registerFormDetails() {
        await this.common.check_element(loc.titleMr);

        await this.common.have_value(loc.accountName, data.rendomname);
        await this.common.have_value(
            loc.accountEmail,
            data.randomeEmail
        );

        await this.common.enter_text(loc.password, data.rendomPassword, "Password Box");

        await this.common.select_option(loc.days, data.day);
        await this.common.select_option(loc.months, data.month);
        await this.common.select_option(loc.years, data.year);

        await this.common.check_element(loc.newsletter);
        await this.common.be_checked(loc.newsletter);

        await this.common.check_element(loc.optin);
        await this.common.be_checked(loc.optin);

        await this.common.enter_text(loc.firstName, data.firstName);
        await this.common.enter_text(loc.lastName, data.lastName);
        await this.common.enter_text(loc.company, data.company);
        await this.common.enter_text(loc.address1, data.address1);
        await this.common.enter_text(loc.address2, data.address2);

        await this.common.select_option(loc.country, data.country);

        await this.common.enter_text(loc.state, data.state);
        await this.common.enter_text(loc.city, data.city);
        await this.common.enter_text(loc.zipcode, data.zipcode);
        await this.common.enter_text(loc.mobileNumber, data.mobileNumber);

        await this.common.click_element(loc.createAccount);
    }

    async verifyAccountCreated() {
        await this.common.be_visible(loc.accountCreated);
        await this.common.click_element(loc.continueButton);
    }

    async verifyLoggedInUser() {
        await this.common.be_visible(loc.loggedInUser2);
    }

    async verifyLoginHeading() {
        await this.common.be_visible(loc.loginHeading);
    }

    async loginuser() {
        await this.common.enter_text(
            loc.emailInput,
            data.randomeEmail
        );
        await this.common.enter_text(
            loc.passwordInput,
            data.rendomPassword
        );
        await this.common.click_element(loc.loginButton);
        await this.common.be_visible(loc.loggedInUser2);
    }

    async loginWithInvalidDetails() {
        await this.common.enter_text(loc.emailInput, data.invalidEmail," Email Box for Invalid Login");
        await this.common.enter_text(loc.passwordInput, data.invalidPassword, "Password Box for Invalid Login");
        await this.common.click_element(loc.loginButton);
    }

    async verifyInvalidLoginError() {
        await this.common.be_visible(loc.errorMessage);
    }

    async clickLogout() {
        await this.common.click_element(loc.Logout);
    }

    async verifyLogoutUrl() {
        await this.common.have_url(data.url);
    }

    async verifyExistingEmailError() {
        await this.common.be_visible(loc.existingEmailError);
    }

    async deleteaccount() {
        await this.common.click_element(loc.deleteAccount);
        await this.common.be_visible(loc.accountDeleted);
        await this.common.click_element(loc.contbtn);
    }
}