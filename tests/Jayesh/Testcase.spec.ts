import { test } from '@playwright/test';
import { Testcasepage } from '../pages/Testcase';



test('Test Case 7: Verify Test Cases Page @smoke', async ({ page }) => {

    const testcase = new Testcasepage(page);

    await testcase.navigateToWebsite();
    await testcase.verifyHomePage();
    await testcase.clickTestCasesButton();
    await testcase.verifyTestCasesPage();
});