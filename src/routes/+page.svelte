<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="container">
	<h1>Welcome to clay.frrs.dev</h1>
	<p>Hi! I'm Clay. This is my personal website where I share thoughts, projects, and ideas.</p>

	<div class="quick-links">
		<a href="{base}/about" class="link-card">
			<h2>About Me</h2>
			<p>Learn more about who I am and what I do</p>
		</a>

		<a href="{base}/blog" class="link-card">
			<h2>Blog</h2>
			<p>Read my latest thoughts and articles</p>
		</a>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--text-color);
	}

	p {
		font-size: 1.2rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}

	.quick-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.link-card {
		padding: 1.5rem;
		border: 2px solid var(--border-color);
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		background-color: var(--surface-color);
	}

	.link-card:hover {
		border-color: var(--text-color);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	:global([data-theme='dark']) .link-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.link-card h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--text-color);
	}

	.link-card p {
		font-size: 1rem;
		margin-bottom: 0;
		color: var(--text-secondary);
	}
</style>
