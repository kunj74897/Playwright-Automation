import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = registerUserData;

export class Productpage {
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
        await this.common.click_element(loc.signupLogin);
    }

    async signupName() {
        await this.common.enter_text(loc.signupName, data.rendomname);
    }

    async signupEmail() {
        await this.common.enter_text(loc.signupEmail, data.rendomemail);
    }

    async clickSignupButton() {
        await this.common.click_element(loc.signupButton);
    }

    async registerFormDetails() {
        await this.common.check_element(loc.titleMr);

        await this.common.have_value(loc.accountName, data.rendomname);
        await this.common.have_value(loc.accountEmail, data.rendomemail);

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

    async clickproduct() {
        await this.common.click_element(loc.product);
    }

    async allproduct() {
        await this.common.be_visible(loc.allproduct);
    }

    async verifyProductList() {
        await this.common.be_visible(loc.productlist);
    }

    async clickFirstProduct() {
        await this.common.click_element(loc.productfirst);
    }

    async verifyFirstProduct() {
        await this.common.be_visible(loc.firstproduct);
    }

    async verifyProductInformation() {
        await this.common.be_visible(loc.productinfo);
    }

    async searchproduct() {
        await this.common.enter_text(loc.searchProduct, data.productname);
        await this.common.click_element(loc.searchbtn);
        await this.common.be_visible(loc.searchedproducttitle);
        await this.common.be_visible(loc.searchedproduct);
    }

    async addcart() {
        await this.common.click_element(loc.product);

        await this.common.hover_element(loc.firstpro);
        await this.common.click_element(loc.firstaddtocart);
        await this.common.click_element(loc.continuebtn);

        await this.common.hover_element(loc.secondpro);
        await this.common.click_element(loc.secondaddtocart);

        await this.common.click_element(loc.viewcart);

        await this.common.be_visible(loc.carttable);
        await this.common.be_visible(loc.profirst);
        await this.common.be_visible(loc.prosecond);

        await this.common.have_text(loc.firstproprice, data.firstproprice);
        await this.common.have_text(loc.secondproprice, data.secondproprice);

        await this.common.have_text(loc.firstproquantity, data.firstproquantity);
        await this.common.have_text(loc.secondproquantity, data.secondproquantity);

        await this.common.have_text(loc.totalprice1, data.firstproprice);
        await this.common.have_text(loc.totalprice2, data.secondproprice);
    }

    async placeOrder() {

        await this.common.hover_element(loc.firstpro);
        await this.common.click_element(loc.firstaddtocart);

        await this.common.click_element(loc.viewcart);
        await this.common.click_element(loc.checkoutbtn);
        await this.common.click_element(loc.reglogin);

        await this.common.enter_text(loc.emailInput, data.rendome2email);
        await this.common.enter_text(loc.passwordInput, data.rendome2Password);
        await this.common.click_element(loc.loginButton);

        await this.common.be_visible(loc.loggedInUser3);

        await this.common.click_element(loc.cartpage);
        await this.common.click_element(loc.checkoutbtn);

        await this.common.enter_text(loc.textbox, data.text);
        await this.common.click_element(loc.placeorder);

        await this.common.enter_text(loc.nameonncard, data.nameOnCard);
        await this.common.enter_text(loc.cardnumber, data.cardNumber);
        await this.common.enter_text(loc.CVC, data.cvc);
        await this.common.enter_text(loc.expmonth, data.expMonth);
        await this.common.enter_text(loc.expyear, data.expYear);

        await this.common.click_element(loc.conformbtn);
        await this.common.be_visible(loc.conformorder);

        await this.common.click_element(loc.deleteAccount);
        await this.common.be_visible(loc.accountDeleted);
        await this.common.click_element(loc.contbtn);
    }

    async hoverAndAddToCart() {
        await this.common.hover_element(loc.firstpro);
        await this.common.click_element(loc.firstaddtocart);
        await this.common.click_element(loc.continuebtn);
    }

    async cartbutton() {
        await this.common.click_element(loc.cart);
    }

    async cartpagevisible() {
        await this.common.be_visible(loc.verifycartpage);
    }

    async checkoutbutton() {
        await this.common.click_element(loc.checkoutbtn);
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
        await this.common.be_visible(loc.accountDeleted);
        await this.common.click_element(loc.contbtn);
    }

    async loginuser2() {
        await this.common.enter_text(loc.emailInput, data.email);
        await this.common.enter_text(loc.passwordInput, data.registerPassword);
        await this.common.click_element(loc.loginButton);
        await this.common.be_visible(loc.loggedInUser);
    }

    async viewcategory() {
        await this.common.be_visible(loc.Viewcategory);
    }

    async womencategory() {
        await this.common.click_element(loc.womencategory);
    }

    async dresscategory() {
        await this.common.click_element(loc.dresscategory);
    }

    async verifydresscategory() {
        await this.common.be_visible(loc.verifydresscategory);
    }

    async mencategory() {
        await this.common.click_element(loc.mencategory);
    }

    async viewbrand() {
        await this.common.be_visible(loc.brand);
    }

    async brandname() {
        await this.common.click_element(loc.brandname);
    }

    async verifybrandname() {
        await this.common.be_visible(loc.verifybrandname);
    }

    async brandname2() {
        await this.common.click_element(loc.brandname2);
    }

    async verifybrandname2() {
        await this.common.be_visible(loc.verifybrandname2);
    }

    async addtocartsearch() {
        await this.common.hover_element(loc.searchedproduct);
        await this.common.click_element(loc.addtocartsearch);
    }

    async viewcart() {
        await this.common.click_element(loc.viewcart);
        await this.common.be_visible(loc.carttable);
    }

    async viewcart2() {
        await this.common.be_visible(loc.carttable);
    }

    async productviewproduct() {
        await this.common.click_element(loc.productviewproduct);
    }

    async writereview() {
        await this.common.be_visible(loc.writereview);
    }

    async yourname() {
        await this.common.enter_text(loc.yourname, data.name);
    }

    async emailaddress() {
        await this.common.enter_text(loc.emailaddress, data.email);
    }

    async cartreview() {
        await this.common.enter_text(loc.cartreview, data.eMessage);
    }

    async cartsubmitbtn() {
        await this.common.click_element(loc.cartsubmitbtn);
    }

    async reviewmessage() {
        await this.common.be_visible(loc.reviewmessage);
    }
}