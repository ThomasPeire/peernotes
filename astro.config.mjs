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
			title: 'PeerNotes',
			description: 'Complete guides and tutorials for Kubernetes, Proxmox, DevOps, and system administration. Step-by-step instructions for setting up K3s clusters, FluxCD GitOps, homelab infrastructure, and enterprise-grade solutions.',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en-US',
				},
			},
			favicon: '/favicon.svg',
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
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/favicon.svg',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						href: '/favicon.svg',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/favicon.svg',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/site.webmanifest',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#3b82f6',
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
					label: 'Getting Started',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'Quick Reference',
					autogenerate: { directory: 'cheatsheets' },
				},
				{
					label: 'Kubernetes & Container Orchestration',
					items: [
						{ label: 'Kubernetes Installation on WSL2', link: '/guides/install-kubernetes-on-wsl/' },
						{ label: 'High Availability K3s Setup', link: '/guides/setup-ha-k3s/' },
						{ label: 'FluxCD GitOps', link: '/guides/fluxcd/' },
						{ label: 'FluxCD with SOPS Encrypted Secrets', link: '/guides/fluxcd-sops-encrypted-secrets/' },
						{ label: 'Longhorn with FluxCD Installation', link: '/guides/longhorn-fluxcd-installation/' },
					],
				},
				{
					label: 'Virtualization & Infrastructure',
					items: [
						{ label: 'Proxmox Cluster Setup', link: '/guides/proxmox-cluster/' },
						{ label: 'Proxmox Ubuntu VM Template', link: '/guides/proxmox-ubuntu-vm-template/' },
						{ label: 'Creating Bootable VHDX', link: '/guides/bootable-vhdx/' },
					],
				},
				{
					label: 'Development & DevOps',
					items: [
						{ label: 'Dev Tunnels', link: '/guides/devtunnels/' },
						{ label: 'SSH Setup using ssh-import-id', link: '/guides/setting-up-ssh-using-ssh-import-id/' },
					],
				},
				{
					label: 'Productivity & Tools',
					items: [
						{ label: 'PowerToys Run Shortcuts', link: '/guides/powertoys-run-shortcuts/' },
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
