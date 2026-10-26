import { test } from '@playwright/test';
import { Homepage } from '../pages/Home';

test('Test Case 10: Verify Subscription in Home Page', async ({ page }) => {
    const home = new Homepage(page);

    await home.navigateToWebsite();
    await home.verifyHomePage();
    await home.verifyscroller();
    await home.enterSubscriptionEmail();
    await home.clickSubscriptionButton();
    await home.verifySubscriptionMessage();

    await page.waitForTimeout(5000);
});

test('Test Case 25:Verify Scroll Up using arrow button', async ({ page }) => {
    const home = new Homepage(page);

    await home.navigateToWebsite();
    await home.verifyHomePage();
    await home.verifyscroller();
    await home.scrollup();
    await home.fullfleadge();

    await page.waitForTimeout(5000);
});

test('Test Case 26:Verify Scroll Up without arrow button and Scroll Down functionality', async ({ page }) => {
    const home = new Homepage(page);

    await home.navigateToWebsite();
    await home.verifyHomePage();
    await home.verifyscroller();

    await page.waitForTimeout(3000);
    await home.scrollupwithoutarrow();

    await page.waitForTimeout(5000);
});