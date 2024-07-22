import { expect, test } from '@playwright/test';

test('find article with search phrase', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('search').getByRole('searchbox', { name: /Search Wikipedia/i }).fill('playwright');
  await page.getByRole('search').getByRole('button').click();
  await expect(page).toHaveTitle(/playwright/i);
});