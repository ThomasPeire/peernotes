// @ts-check
import { defineConfig } from 'astro/config';
import  sitemapPlugin  from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://thomaspeire.github.io',
	base: '/peernotes',
	integrations: [
		sitemapPlugin(),
		starlight({
			title: 'PeerNotes',
			social: {
				github: 'https://github.com/thomaspeire',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'Cheatsheets',
					autogenerate: { directory: 'cheatsheets' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Tools & Technologies',
					autogenerate: { directory: 'tools' },
				},
			],
		}),
	],
});
