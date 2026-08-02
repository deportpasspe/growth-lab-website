import {expect, test} from '@playwright/test'

test.describe('Growth Lab smoke', () => {
  test('/es/ loads with brand and contact form', async ({page}) => {
    await page.goto('/es/')
    await expect(page.getByRole('banner')).toContainText('Growth Lab')
    await expect(page.getByRole('heading').first()).toBeVisible()
    await page.goto('/es/contacto')
    await expect(page.locator('form[data-contact-form]')).toBeVisible()
  })

  test('/en/ loads with contact form', async ({page}) => {
    await page.goto('/en/')
    await expect(page.getByRole('banner')).toContainText('Growth Lab')
    await expect(page.getByRole('heading').first()).toBeVisible()
    await page.goto('/en/contact')
    await expect(page.locator('form[data-contact-form]')).toBeVisible()
  })

  test('services index is reachable', async ({page}) => {
    await page.goto('/es/servicios')
    await expect(page.getByRole('heading').first()).toBeVisible()
  })
})
