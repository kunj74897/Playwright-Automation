import { expect, Page } from '@playwright/test';

export class CommonMethods {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto_url(url: string) {
        await this.page.goto(url);
    }

    async enter_text(locator: string, data: string) {
        await this.page.locator(locator).fill(data);
    }

    async click_element(locator: string) {
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

/*     async closeAdIfVisible() {
    const closeXPath = "//div[@class='continue-prompt-text']";

    const findVisibleClose = async () => {
        for (const frame of this.page.frames()) {
            const closeButtons = frame.locator(closeXPath);
            const count = await closeButtons.count().catch(() => 0);

            for (let i = 0; i < count; i++) {
                const closeButton = closeButtons.nth(i);

                if (await closeButton.isVisible().catch(() => false)) {
                    return closeButton;
                }
            }
        }

        return null;
    };

    // First check whether the Close button is already visible.
    let closeButton = await findVisibleClose();

    // If it is not visible yet, briefly wait for an ad to appear.
    if (!closeButton) {
        const frames = this.page.frames();

        await Promise.all(
            frames.map(async (frame) => {
                await frame
                    .locator(closeXPath)
                    .first()
                    .waitFor({
                        state: 'visible',
                        timeout: 700
                    })
                    .catch(() => {});
            })
        );

        closeButton = await findVisibleClose();
    }

    // Click only if a visible Close button exists.
    if (closeButton) {
        await closeButton.click({ timeout: 2000 }).catch(() => {});
    }
} */
}