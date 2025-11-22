<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import '$lib/styles/prism-theme.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="layout">
	<nav>
		<div class="nav-container">
			<a href="{base}/" class="logo">clay.frrs.dev</a>
			<div class="nav-right">
				<div class="nav-links">
					<a href="{base}/" class:active={$page.url.pathname === `${base}/` || $page.url.pathname === base}>Home</a>
					<a href="{base}/about" class:active={$page.url.pathname === `${base}/about`}>About</a>
					<a href="{base}/blog" class:active={$page.url.pathname.startsWith(`${base}/blog`)}>Blog</a>
					<a href="{base}/now" class:active={$page.url.pathname.startsWith(`${base}/now`)}>Now</a>
				</div>
				<ThemeToggle />
			</div>
		</div>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} clay.frrs.dev. All rights reserved.</p>
	</footer>
</div>

<style>
	:global(:root) {
		--bg-color: #fafafa;
		--surface-color: #ffffff;
		--text-color: #333333;
		--text-secondary: #666666;
		--text-tertiary: #999999;
		--border-color: #e0e0e0;
		--hover-bg: #f5f5f5;
		--link-color: #0066cc;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	:global([data-theme='dark']) {
		--bg-color: #1a1a1a;
		--surface-color: #2a2a2a;
		--text-color: #e0e0e0;
		--text-secondary: #b0b0b0;
		--text-tertiary: #808080;
		--border-color: #404040;
		--hover-bg: #333333;
		--link-color: #4da6ff;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background-color: var(--bg-color);
		color: var(--text-color);
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	nav {
		background-color: var(--surface-color);
		border-bottom: 1px solid var(--border-color);
		padding: 1rem 0;
		position: sticky;
		top: 0;
		z-index: 100;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.logo {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-color);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.logo:hover {
		color: var(--text-secondary);
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 1rem;
		transition: color 0.2s ease;
		position: relative;
	}

	.nav-links a:hover {
		color: var(--text-color);
	}

	.nav-links a.active {
		color: var(--text-color);
		font-weight: 500;
	}

	.nav-links a.active::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--text-color);
	}

	main {
		flex: 1;
		padding: 2rem 0;
	}

	footer {
		background-color: var(--surface-color);
		border-top: 1px solid var(--border-color);
		padding: 2rem;
		text-align: center;
		margin-top: 4rem;
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	footer p {
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-right {
			gap: 1rem;
		}

		.nav-links {
			gap: 1.5rem;
		}
	}
</style>
