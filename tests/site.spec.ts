import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 375, 390, 430, 768, 1024, 1440, 1920]) {
  test(`layout e acessibilidade em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('main .portrait')).toHaveCount(2);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate((element) => {
            const img = element as HTMLImageElement;
            return img.complete && img.naturalWidth > 0;
          }),
        )
        .toBe(true);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    expect(
      await page
        .locator('img')
        .evaluateAll((images) =>
          images.every(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    ).toBe(true);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
    if (width === 390 || width === 1440)
      await page.screenshot({
        path: `docs/screenshots/home-${width}.png`,
        fullPage: true,
      });
  });
}

test('menu mobile, teclado, FAQ e contatos', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menu' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Atendimentos', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page
    .getByRole('link', { name: 'Sobre a Roberta', exact: true })
    .click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page).toHaveURL(/#sobre$/);
  const question = page.locator('summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('details').first()).toHaveAttribute('open', '');
  const links = await page
    .locator('a[href*="wa.me"]')
    .evaluateAll((items) =>
      items.map((item) => (item as HTMLAnchorElement).href),
    );
  expect(links.length).toBeGreaterThan(4);
  for (const href of links) {
    const url = new URL(href);
    expect(url.pathname).toBe('/5541991614821');
    expect(url.searchParams.get('text')).toMatch(/^Olá, Roberta!/);
  }
  expect(
    new Set(links.map((href) => new URL(href).searchParams.get('text'))).size,
  ).toBe(3);
  await expect(
    page.locator('a[href="mailto:contato@robertacunha.com.br"]').first(),
  ).toBeAttached();
  await expect(
    page
      .locator('a[href="https://www.instagram.com/psirobertacunha/"]')
      .first(),
  ).toBeAttached();
});

test('preferências, persistência, rejeição e ausência de rastreadores', async ({
  page,
}) => {
  const requests: string[] = [];
  page.on('request', (request) => {
    if (!request.url().startsWith('http://127.0.0.1:4322'))
      requests.push(request.url());
  });
  await page.goto('/');
  const settings = page.getByRole('button', {
    name: 'Preferências de cookies',
  });
  await settings.click();
  await expect(
    page.getByRole('region', { name: 'Preferências de privacidade' }),
  ).toBeVisible();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.getByRole('button', { name: 'Aceitar opcionais' }).click();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem('rc-consent')!).optional,
    ),
  ).toBe(true);
  await page.reload();
  await settings.click();
  await page.getByRole('button', { name: 'Rejeitar opcionais' }).click();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem('rc-consent')!).optional,
    ),
  ).toBe(false);
  await expect(settings).toBeFocused();
  expect(requests).toEqual([]);
});

test('metadados, âncoras e páginas complementares', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://robertacunha.com.br/',
  );
  expect(
    JSON.parse(
      await page.locator('script[type="application/ld+json"]').innerText(),
    ).name,
  ).toBe('Roberta da Silva Cunha');
  const anchors = await page
    .locator('a[href^="#"],a[href^="/#"]')
    .evaluateAll((items) =>
      items.map((item) => (item as HTMLAnchorElement).hash.slice(1)),
    );
  for (const anchor of anchors)
    await expect(page.locator(`[id="${anchor}"]`)).toHaveCount(1);
  for (const path of [
    '/politica-de-privacidade/',
    '/politica-de-cookies/',
    '/404/',
  ]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  }
  expect((await request.get('/sitemap.xml')).status()).toBe(200);
  expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap:');
});

test('conteúdo e FAQ funcionam sem JavaScript', async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await expect(
    page.getByRole('link', { name: 'Atendimentos', exact: true }),
  ).toBeVisible();
  await page.locator('summary').first().click();
  await expect(page.locator('details').first()).toHaveAttribute('open', '');
  await expect(page.locator('main a[href*="wa.me"]').first()).toBeVisible();
  await context.close();
});
