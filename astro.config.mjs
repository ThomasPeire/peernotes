// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PeerNotes',
			social: {
				github: 'https://github.com/thomaspeire',
			},
			sidebar: [
				{
					label: 'Cheatsheets',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Git', slug: 'cheatsheets/git-cheat-sheet' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
