import { test } from '@playwright/test';
import { Cartpage } from '../pages/Cart';


test.only('Test Case 11: Verify Subscription in Cart Page', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.verifyHomePage();
    await cart.cartbutton();
    await cart.verifyscroller();
    await cart.enterSubscriptionEmail();
    await cart.clickSubscriptionButton();
    await cart.verifySubscriptionMessage();

    // await page.waitForTimeout(5000);

});


test('Test Case 13: Verify Product Quantity in Cart', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.verifyHomePage();
    await cart.verifyproQuantity();

});


test ('Test Case 17: Remove Product From Cart', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.verifyHomePage();
    await cart.hoverAndAddToCart();
    await cart.cartbutton();
    await cart.cartpagevisible();
    await cart.removeproduct();
    await cart.verifycartempty();

    // await page.waitForTimeout(5000);
});


test('Test Case 22: Add to cart from Recommended items', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.scrollrecommendedHeading();
    await cart.recommendedproductaddtocart();
    await cart.viewcart();

    // await page.waitForTimeout(5000);
});


test('Test Case 23: Verify address details in checkout page', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.verifyHomePage();
    await cart.clciksignupLogin();
    await cart.signupName();
    await cart.signupEmail();
    await cart.clickSignupButton();
    await cart.registerFormDetails();
    await cart.verifyAccountCreated();
    await cart.verifyLoggedInUser();
    await cart.hoverAndAddToCart();
    await cart.cartbutton();
    await cart.cartpagevisible();
    await cart.checkoutbutton();
    await cart.yourdilveryaddress();
    await cart.yourbillingaddress();
    await cart.deleteaccount();

    // await page.waitForTimeout(5000);

});


test('Test Case 24:Download Invoice after purchase order', async ({ page }) => {
    const cart = new Cartpage(page);

    await cart.navigateToWebsite();
    await cart.verifyHomePage();
    await cart.hoverAndAddToCart();
    await cart.cartbutton();
    await cart.cartpagevisible();
    await cart.checkoutbutton();
    await cart.registerbeforecheckout();

    await cart.signupName();
    await cart.signupEmail();
    await cart.clickSignupButton();
    await cart.registerFormDetails();
    await cart.verifyAccountCreated();
    await cart.verifyLoggedInUser();
    await cart.cartbutton();
    await cart.checkoutbutton();
    await cart.discriptionbox();
    await cart.paymentdetails();
    await cart.verifyorderplaced();
    await cart.downloadinvoice();
    await cart.deleteaccount();

    // await page.waitForTimeout(5000);

});