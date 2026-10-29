import { Page, expect } from '@playwright/test';
import { RegisterLocators } from '../locators/Register';
import { registerUserData } from '../utils/Data';
import { CommonMethods } from '../utils/Commonmethod';

const loc = RegisterLocators;
const data = new registerUserData();

export class Extrapage {

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

    async verifyNewUserSignup() {
        await this.common.be_visible(loc.newUserSignup);
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

    async verifyAccountInformation() {
        await this.common.be_visible(loc.enterAccountInformation);
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

    async clickDeleteAccountButton() {
        await this.common.click_element(loc.deleteAccount);
    }

    async verifyAccountDeletedOnly() {
        await this.common.be_visible(loc.accountDeleted);
    }



    async verifyLoginHeading() {
        await this.common.be_visible(loc.loginHeading);
    }

    async loginuser() {
        await this.common.enter_text(loc.emailInput, data.email);
        await this.common.enter_text(loc.passwordInput, data.registerPassword);
        await this.common.click_element(loc.loginButton);
        await this.common.be_visible(loc.loggedInUser);
    }


    async loginWithInvalidDetails() {
        await this.common.enter_text(loc.emailInput, data.invalidEmail);
        await this.common.enter_text(loc.passwordInput, data.invalidPassword);
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



    // TEST CASE 6: CONTACT US FORM

    async contactUS() {
        // Original Contact Us implementation was commented out.
    }


    async clickTestCasesButton() {
        await this.common.click_element(loc.testcase);
    }

    async verifyTestCasesPage() {
        await this.common.have_url(data.tCaseUrl);
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

    async subHomePage() {
        await this.common.goto_url(data.weburl);
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);

        await this.common.scroll_to_element(loc.footer);
        await this.common.be_visible(loc.homeSubscription);

        await this.common.enter_text(loc.inputemailsubscription, data.email);
        await this.common.click_element(loc.subbtn);
        await this.common.be_visible(loc.submessage);
    }

    async subCart() {
        await this.common.goto_url(data.weburl);
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);

        await this.common.click_element(loc.cart);
        await this.common.scroll_to_element(loc.footer);
        await this.common.be_visible(loc.homeSubscription);

        await this.common.enter_text(loc.inputemailsubscription, data.email);
        await this.common.click_element(loc.subbtn);
        await this.common.be_visible(loc.submessage);
    }



    async addcart() {
        await this.common.goto_url(data.weburl);
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);

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


    async verifyproQuantity() {
        await this.common.goto_url(data.weburl);
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);

        await this.common.click_element(loc.homeviewproduct);
        await this.common.enter_text(loc.inputBox, data.quantity);

        await this.common.have_value(loc.inputBox, data.quantity);

        await this.common.click_element(loc.addtocart);
        await this.common.click_element(loc.viewcart);
        await this.common.have_text(loc.quantity, data.quantity);
    }



    async placeOrder() {
        await this.common.goto_url(data.weburl);
        await this.common.have_title('Automation Exercise');
        await this.common.be_visible(loc.home);

        await this.common.hover_element(loc.firstpro);
        await this.common.click_element(loc.firstaddtocart);

        await this.common.click_element(loc.viewcart);
        await this.common.click_element(loc.checkoutbtn);
        await this.common.click_element(loc.reglogin);

        await this.common.enter_text(loc.emailInput, data.email);
        await this.common.enter_text(loc.passwordInput, data.registerPassword);
        await this.common.click_element(loc.loginButton);

        await this.common.be_visible(loc.loggedInUser);

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




    async addFirstProductForCheckout() {
        await this.common.hover_element(loc.firstpro);
        await this.common.click_element(loc.firstaddtocart);
    }

    async clickRegisterLoginAtCheckout() {
        await this.common.click_element(loc.reglogin);
    }

    async returnToCartAfterLogin() {
        await this.common.click_element(loc.cartpage);
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

    async removeproduct() {
        await this.common.click_element(loc.removeproduct);
    }

    async verifycartempty() {
        await this.common.be_visible(loc.cartempty);
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

    async searchproductForCart() {
        await this.common.enter_text(loc.searchProduct, data.productname);
        await this.common.click_element(loc.searchbtn);
        await this.common.be_visible(loc.searchedproducttitle);
        await this.common.be_visible(loc.searchedproduct);
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

    async viewproduct() {
        await this.common.click_element(loc.homeviewproduct);
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
    }

    async downloadinvoice() {
        await this.common.click_element(loc.downloadinvoice);
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