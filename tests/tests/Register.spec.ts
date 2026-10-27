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

    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyLoginHeading();
    await register.loginuser();
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

    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyLoginHeading();
    await register.loginuser();
    // await register.clickLogout();
    // await register.verifyLogoutUrl();
});

test('Test Case 5: Register User with Existing Email', async ({ page }) => {
    const register = new registerpage(page);

    await register.navigateToWebsite();
    await register.verifyHomePage();
    await register.clciksignupLogin();
    await register.verifyNewUserSignup();
    await register.signupName2();
    await register.signupEmail2();
    await register.clickSignupButton();
    // await register.verifyExistingEmailError();
});