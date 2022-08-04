import playwright from 'playwright';
import type { Browser, Page } from 'playwright';

async function openBrowser(): Promise<Browser> {
  return await playwright.chromium.launch({
    headless: true,
  });
}

async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}

async function navigateTo(browser: Browser, url: string): Promise<Page> {
  const page = await browser.newPage();
  await page.goto(url);

  return page;
}

export const BrowserService = {
  openBrowser,
  closeBrowser,
  navigateTo,
};
