// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://thomaspeire.github.io',
	base: '/peernotes',
	integrations: [
		starlight({
			title: 'PeerNotes',
			social: {
				github: 'https://github.com/thomaspeire',
			},
			sidebar: [
				{
					label: 'Cheatsheets',
					autogenerate: { directory: 'cheatsheets' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
