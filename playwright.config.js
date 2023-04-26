import { devices, defineConfig } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = defineConfig({
	webServer: {
		command: 'node webserver.js',
		port: 4173,
	},
	testDir: 'tests',
	workers: 1,
	use: {
		...devices['Desktop Chrome']
	}
});

export default config;
