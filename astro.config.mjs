// @ts-check
import sitemapPlugin from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.thomaspeire.be',
	integrations: [
		sitemapPlugin(),
		starlight({
			title: 'PeerNotes - Technical Documentation Hub',
			description: 'Complete guides and tutorials for Kubernetes, Proxmox, DevOps, and system administration. Step-by-step instructions for setting up K3s clusters, FluxCD GitOps, homelab infrastructure, and enterprise-grade solutions.',
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
						content: 'kubernetes documentation, proxmox guides, devops tutorials, system administration, k3s setup, docker containers, homelab infrastructure, linux tutorials, virtualization guides, gitops workflows, technical documentation, thomas peire',
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
						name: 'robots',
						content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'googlebot',
						content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
						content: 'PeerNotes - Technical Documentation Hub',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:locale',
						content: 'en_US',
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
					tag: 'meta',
					attrs: {
						name: 'twitter:site',
						content: '@thomaspeire',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'canonical',
						href: 'https://docs.thomaspeire.be/',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'sitemap',
						href: '/sitemap-index.xml',
					},
				},
				{
					tag: 'script',
					attrs: {
						type: 'application/ld+json',
					},
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'PeerNotes',
						description: 'Personal tech knowledge hub documenting real-world solutions, guides, and practical insights from hands-on experience with Kubernetes, Proxmox, DevOps, and system administration.',
						url: 'https://docs.thomaspeire.be',
						author: {
							'@type': 'Person',
							name: 'Thomas Peire',
							url: 'https://docs.thomaspeire.be',
						},
						inLanguage: 'en-US',
						copyrightHolder: {
							'@type': 'Person',
							name: 'Thomas Peire',
						},
						publisher: {
							'@type': 'Person',
							name: 'Thomas Peire',
						},
					}),
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
