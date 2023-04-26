import { expect, test } from '@playwright/test';

for (let i = 0; i < 100; i++) {
	test(i + '', async ({ page }) => {
		await page.setExtraHTTPHeaders({
			'x-test-id': i + ''
		});
		const res = await page.goto('/');

		expect(res.status()).toBe(200);
		expect(await res.text()).toBe('Hello World ' + i + '.');
	});
}
