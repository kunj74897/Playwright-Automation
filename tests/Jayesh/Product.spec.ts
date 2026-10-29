import { test } from '@playwright/test';
import { Productpage } from '../pages/Product';


test('Test Case 8: Verify All Products and Product Detail Page', async ({ page }) => {
    const product = new Productpage(page);
    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clickproduct();
    await product.allproduct();
    await product.verifyProductList();
    await product.clickFirstProduct();
    await product.verifyFirstProduct();
    await product.verifyProductInformation();
});


test('Test Case 9: Search Product', async ({ page }) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clickproduct();
    await product.allproduct();
    await product.searchproduct();

    // await page.waitForTimeout(5000);

});


test('Test Case 12: Add Products in Cart', async ({ page }) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.addcart();

    // await page.waitForTimeout(5000);

});


test('Test Case 14: Place Order - Register While Checkout', async ({ page }) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.placeOrder();

    // await page.waitForTimeout(5000);

});


test ('Test Case 15: Place Order Before Checkout', async ({page}) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clciksignupLogin();
    await product.signupName();
    await product.signupEmail();
    await product.clickSignupButton();
    await product.registerFormDetails();
    await product.verifyAccountCreated();
    await product.verifyLoggedInUser();
    await product.hoverAndAddToCart();
    await product.cartbutton();
    await product.cartpagevisible();
    await product.checkoutbutton();
    await product.discriptionbox();
    await product.paymentdetails();
    await product.verifyorderplaced();
    await product.deleteaccount();
});


test('Test Case 16: Remove Product From Cart', async ({ page }) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.hoverAndAddToCart();
    await product.cartbutton();
    await product.cartpagevisible();
    await product.removeproduct();
    await product.verifycartempty();
});


test('Test case 18: View Category Products', async ({page}) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.viewcategory();
    await product.womencategory();
    await product.dresscategory();
    await product.verifydresscategory();
    await product.mencategory();

    // await page.waitForTimeout(2000);

});


test ('Test Case 19: View & Cart Brand Products', async ({page}) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clickproduct();
    await product.viewbrand();
    await product.brandname();
    await product.verifybrandname();
    await product.brandname2();
    await product.verifybrandname2();

    // await page.waitForTimeout(2000);

});


test('Test Case 20: Search Products and Verify Cart After Login', async ({ page }) => {
    const product = new Productpage(page);

    // Create a dedicated account for this test
    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clciksignupLogin();
    await product.verifyNewUserSignup();
    await product.signupName();
    await product.signupEmail();
    await product.clickSignupButton();
    await product.verifyAccountInformation();
    await product.registerFormDetails();
    await product.verifyAccountCreated();
    await product.verifyLoggedInUser();

    // Log out before starting the shopping flow
    await product.clickLogout();
    await product.verifyLogoutUrl();

    // Original Test Case 20 shopping flow
    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clickproduct();
    await product.allproduct();
    await product.searchproduct();
    await product.addtocartsearch();
    await product.viewcart();
    await product.clciksignupLogin();
    await product.loginuser2();
    await product.cartbutton();
    await product.viewcart2();

    // Clean up only the account created by this test
    await product.deleteaccount();
});


test('Test Case 21: Add review on Product', async ({page}) => {
    const product = new Productpage(page);

    await product.navigateToWebsite();
    await product.verifyHomePage();
    await product.clickproduct();
    await product.allproduct();
    await product.productviewproduct();
    await product.writereview();
    await product.yourname();
    await product.emailaddress();
    await product.cartreview();
    await product.cartsubmitbtn();
    await product.reviewmessage();


});