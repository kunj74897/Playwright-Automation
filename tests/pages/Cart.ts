import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = new registerUserData();

export class Cartpage {
    // private registrationEmail: string

    private page: Page;
    private common: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.common = new CommonMethods(page);
        // this.registrationEmail = generateRandomEmail('cart');
    }

    async navigateToWebsite() {
        await this.common.goto_url(data.weburl);
        await this.common.closeAdIfVisible();

    }

    async verifyHomePage() {
       
        await this.common.have_title('Automation Exercise');
    }

    async clciksignupLogin() {
        await this.common.click_element(loc.signupLogin);
        await this.common.closeAdIfVisible();
    }

    async signupName() {
        await this.common.enter_text(loc.signupName, data.rendomname);
    }

    async signupEmail() {
        await this.common.enter_text(loc.signupEmail, data.randomeEmail);
    }

    async clickSignupButton() {
        await this.common.click_element(loc.signupButton);
    }

    async registerFormDetails() {
        await this.common.check_element(loc.titleMr);

        await this.common.have_value(loc.accountName, data.rendomname);
        await this.common.have_value(loc.accountEmail, data.randomeEmail);

        await this.common.enter_text(loc.password, data.rendomPassword);

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

    async verifyproQuantity() {
        

        await this.common.click_element(loc.homeviewproduct);
        await this.common.closeAdIfVisible();
        await this.common.enter_text(loc.inputBox, data.quantity);

        await this.common.have_value(loc.inputBox, data.quantity);

        await this.common.click_element(loc.addtocart);
        await this.common.click_element(loc.viewcart);
        await this.common.have_text(loc.quantity, data.quantity);
    }

    async hoverAndAddToCart() {
       
        await this.common.hover_element(loc.firstpro);
         await this.common.closeAdIfVisible();
        await this.common.click_element(loc.firstaddtocart);
        await this.common.click_element(loc.continuebtn);
    }

    async cartbutton() {
        
        await this.common.click_element(loc.cart);
        await this.common.closeAdIfVisible();
    }

    async cartpagevisible() {
        await this.common.be_visible(loc.verifycartpage);
    }

    async checkoutbutton() {
        await this.common.click_element(loc.checkoutbtn);
        await this.common.closeAdIfVisible();
    }

    async discriptionbox() {
        await this.common.enter_text(loc.textbox, data.text);
        await this.common.click_element(loc.placeorder);
    }

    async paymentdetails() {
        await this.common.enter_text(loc.nameonncard, data.nameOnCard);
        await this.common.enter_text(loc.cardnumber, data.cardNumber);
        await this.common.enter_text(loc.CVC, data.cvc);
        await this.common.enter_text(loc.expmonth, data.expMonth);
        await this.common.enter_text(loc.expyear, data.expYear);
        await this.common.click_element(loc.conformbtn);
    }

    async verifyorderplaced() {
        await this.common.be_visible(loc.conformorder);
    }

    async deleteaccount() {
        await this.common.click_element(loc.deleteAccount);
        await this.common.closeAdIfVisible();
        await this.common.be_visible(loc.accountDeleted);
        await this.common.click_element(loc.contbtn);
        // await this.common.closeAdIfVisible();
    }

    async removeproduct() {
        await this.common.click_element(loc.removeproduct);
    }

    async verifycartempty() {
        await this.common.be_visible(loc.cartempty);
    }

    async viewcart() {
        await this.common.click_element(loc.viewcart);
        await this.common.be_visible(loc.carttable);
    }

    async scrollrecommendedHeading() {
        await this.common.scroll_to_element(loc.recommendedHeading);
        await this.common.be_visible(loc.recommendedHeading);
    }

    async recommendedproductaddtocart() {
        await this.common.click_element(loc.recommendedproductaddtocart);
    }

    async yourdilveryaddress() {
        await this.common.be_visible(loc.youdeliveryadd);
    }

    async yourbillingaddress() {
        await this.common.be_visible(loc.yourbillingadd);
    }

    async registerbeforecheckout() {
        await this.common.click_element(loc.registerBeforeCheckout);
        await this.page.waitForTimeout(5000);
    }

    async downloadinvoice() {
        await this.common.click_element(loc.downloadinvoice);
       
    }

}