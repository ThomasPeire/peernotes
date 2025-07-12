// @ts-check
import sitemapPlugin from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://thomaspeire.github.io',
	base: '/peernotes',
	integrations: [
		sitemapPlugin(),
		starlight({
			title: 'PeerNotes',
			description: 'Personal tech knowledge hub documenting real-world solutions, guides, and practical insights from hands-on experience.',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en-US',
				},
			},
			social: {
				github: 'https://github.com/thomaspeire/peernotes',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'tech documentation, kubernetes, proxmox, devops, system administration, tutorials, guides, homelab, infrastructure',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'Thomas Peire',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'PeerNotes',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:creator',
						content: '@thomaspeire',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'canonical',
						href: 'https://thomaspeire.github.io/peernotes/',
					},
				},
			],
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
					items: [
						'guides/bootable-vhdx',
						'guides/devtunnels',
						'guides/install-kubernetes-on-wsl',
						'guides/powertoys-run-shortcuts',
						'guides/proxmox-cluster',
						'guides/proxmox-ubuntu-vm-template',
						'guides/setting-up-ssh-using-ssh-import-id',
						'guides/setup-ha-k3s',
					],
				},
				{
					label: 'Tools & Technologies',
					autogenerate: { directory: 'tools' },
				},
			],
		}),
	],
});
