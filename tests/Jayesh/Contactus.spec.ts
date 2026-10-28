import { test } from '@playwright/test';
import { Contactuspage } from '../pages/Contactus';

// Test Case 6: Contact Us Form
test.skip('Test Case 6: Contact Us Form', async ({ page }) => {

    const contactus = new Contactuspage(page);

    await contactus.contactUS();
});