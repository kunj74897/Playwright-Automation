import { test } from '@playwright/test';
import { registerpage } from '../pages/Register';

test('Test Case 1: Register User', async ({ page }) => {
    const register = new registerpage(page);

    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyNewUserSignup();
    await register.signupName();
    await register.signupEmail();
    await register.clickSignupButton();
    await register.verifyAccountInformation();
    await register.registerFormDetails();
    await register.verifyAccountCreated();
    await register.verifyLoggedInUser();
    await register.deleteaccount();
});

test('Test Case 2: Login User with Correct Email and Password', async ({ page }) => {
    const register = new registerpage(page);

    // Create an account automatically for this test.
    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyNewUserSignup();
    await register.signupName();
    await register.signupEmail();
    await register.clickSignupButton();
    await register.verifyAccountInformation();
    await register.registerFormDetails();
    await register.verifyAccountCreated();
    await register.verifyLoggedInUser();

    // Log out, then test login with the same credentials.
    await register.clickLogout();
    await register.verifyLogoutUrl();
    await register.verifyLoginHeading();
    await register.loginuser();

    // Delete the account created by this test.
    await register.deleteaccount();
});

test('Test Case 3: Login User with Incorrect Email and Password', async ({ page }) => {
    const register = new registerpage(page);

    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyLoginHeading();
    await register.loginWithInvalidDetails();
    await register.verifyInvalidLoginError();
});

test('Test Case 4: Logout User', async ({ page }) => {
    const register = new registerpage(page);

    // Create an account automatically for this test.
    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyNewUserSignup();
    await register.signupName();
    await register.signupEmail();
    await register.clickSignupButton();
    await register.verifyAccountInformation();
    await register.registerFormDetails();
    await register.verifyAccountCreated();
    await register.verifyLoggedInUser();

    // Verify logout.
    await register.clickLogout();
    await register.verifyLogoutUrl();

    // Log back in only to clean up this test's account.
    await register.loginuser();
    await register.deleteaccount();
});

test('Test Case 5: Register User with Existing Email', async ({ page }) => {
    const register = new registerpage(page);

    // Create an account so the email definitely exists.
    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyNewUserSignup();
    await register.signupName();
    const email = await register.signupEmail();
    await register.clickSignupButton();
    await register.verifyAccountInformation();
    await register.registerFormDetails();
    await register.verifyAccountCreated();
    await register.verifyLoggedInUser();

    // Log out and try registering the same email again.
    await register.clickLogout();
    await register.verifyLogoutUrl();
    await register.clciksignupLogin();
    // await register.verifyNewUserSignup();
    // await register.signupName2();
    // await register.signupEmail2();
    await register.signupName();
     await register.signupEmail(email); // Use the same email as before
    await register.clickSignupButton();
    await register.verifyExistingEmailError();

    // Log in and delete only the account created by this test.
    // await register.loginuser();
    // await register.deleteaccount();
});