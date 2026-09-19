import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('home route exposes the reference shell without critical accessibility violations', async ({
  page,
}) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeVisible()

  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('unknown routes render an explicit not-found page', async ({ page }) => {
  await page.goto('/not-a-real-guide')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
  await expect(page.getByText('/not-a-real-guide')).toBeVisible()
})
