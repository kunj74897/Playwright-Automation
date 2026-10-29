import { expect, Page } from '@playwright/test';

export class CommonMethods {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto_url(url: string) {
        console.log(`Navigating to URL: ${url}`);
        await this.page.goto(url);
    }

    async enter_text(locator: string, data: string, fieldName: string = '') {
        console.log(`Entering text: ${data} into ${fieldName}`);
        await this.page.locator(locator).fill(data);
    }

    async click_element(locator: string, log: string = '') {
        console.log(`Clicking on ${log}`);
        await this.page.locator(locator).click();
    }

    async force_click(locator: string) {
        await this.page.locator(locator).click({ force: true });
    }

    async have_text(locator: string, expectedText: string) {
        await expect(this.page.locator(locator)).toHaveText(expectedText);
    }

    async have_title(expectedTitle: string) {
        
        await expect(this.page).toHaveTitle(expectedTitle);
        console.log(`Verified title is: ${expectedTitle}`);
    }

    async be_visible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async have_value(locator: string, expectedValue: string) {
        await expect(this.page.locator(locator)).toHaveValue(expectedValue);
    }

    async check_element(locator: string) {
        await this.page.locator(locator).check();
    }

    async be_checked(locator: string) {
        await expect(this.page.locator(locator)).toBeChecked();
    }

    async select_option(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    async have_url(expectedUrl: string | RegExp) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async upload_file(locator: string, filePath: string) {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    async scroll_to_element(locator: string) {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }

    async hover_element(locator: string) {
        await this.page.locator(locator).hover();
    }

    async have_count(locator: string, expectedCount: number) {
        await expect(this.page.locator(locator)).toHaveCount(expectedCount);
    }

// async closeAdIfVisible() {



// const adFrame = this.page.locator(
//     "//iframe[@title='Advertisement' and @id='aswift_3']"
// );




























//     const iframeXPath = "//iframe[@title='Advertisement' and @id='aswift_3']";
//     const closeXPath = "//div[@id='dismiss-button-element']";

//     const iframe = this.page.locator(iframeXPath);
//     let iframeVisible = false;

//     // Check iframe up to 5 times
//     for (let i = 0; i < 5; i++) {

//         if (await iframe.isVisible().catch(() => false)) {
//             console.log("Iframe is visible.");
//             iframeVisible = true;
//             break; // Exit loop immediately when iframe is visible
//         }

//         console.log(`Iframe is not visible. Attempt: ${i + 1}`);
//         await this.page.waitForTimeout(500);
//     }

//     // Click close button only if iframe became visible
//     if (iframeVisible) {
//         const frame = this.page.frameLocator(iframeXPath);
//         const closeButton = frame.locator(closeXPath).first();

//         if (await closeButton.isVisible().catch(() => false)) {
//             await closeButton.click({ timeout: 2000 });
//             console.log("Ad closed successfully.");
//         } else {
//             console.log("Close button is not visible.");
//         }
//     } else {
//         console.log("Iframe was not visible after 5 attempts.");
//     }
// }

async closeAdIfVisible() {
    const adFrameXPath =
        "//iframe[@title='Advertisement' and @id='aswift_3']";

    for (let i = 0; i < 10; i++) {
        const adFrame = this.page.locator(adFrameXPath);

        if (await adFrame.isVisible()) {
            console.log("Ad is visible");

            const closeButton = this.page
                .frameLocator(adFrameXPath)
                .locator("//div[@class='close-button']");

            // if (await closeButton.isVisible()) {
                await closeButton.click();
                console.log("Ad closed successfully");
                break;
            // }
        }else{
            console.log("Ad not visible");
        }

        await this.page.waitForTimeout(2000);
    }
}

}