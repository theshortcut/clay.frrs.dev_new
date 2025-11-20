<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

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
			<div class="nav-links">
				<a href="{base}/" class:active={$page.url.pathname === `${base}/` || $page.url.pathname === base}>Home</a>
				<a href="{base}/about" class:active={$page.url.pathname === `${base}/about`}>About</a>
				<a href="{base}/blog" class:active={$page.url.pathname.startsWith(`${base}/blog`)}>Blog</a>
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
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background-color: #fafafa;
	}

	.layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	nav {
		background-color: white;
		border-bottom: 1px solid #e0e0e0;
		padding: 1rem 0;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.25rem;
		font-weight: 600;
		color: #333;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.logo:hover {
		color: #666;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		color: #666;
		text-decoration: none;
		font-size: 1rem;
		transition: color 0.2s ease;
		position: relative;
	}

	.nav-links a:hover {
		color: #333;
	}

	.nav-links a.active {
		color: #333;
		font-weight: 500;
	}

	.nav-links a.active::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #333;
	}

	main {
		flex: 1;
		padding: 2rem 0;
	}

	footer {
		background-color: white;
		border-top: 1px solid #e0e0e0;
		padding: 2rem;
		text-align: center;
		margin-top: 4rem;
	}

	footer p {
		margin: 0;
		color: #666;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.nav-container {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-links {
			gap: 1.5rem;
		}
	}
</style>
