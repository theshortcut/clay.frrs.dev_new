<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} - clay.frrs.dev</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="container">
	<header>
		<a href="{base}/blog" class="back-link">← Back to Blog</a>
		<h1>{data.metadata.title}</h1>
		<p class="date">{new Date(data.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
	</header>

	<div class="content">
		{@render data.content()}
	</div>
</article>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	header {
		margin-bottom: 3rem;
	}

	.back-link {
		display: inline-block;
		color: var(--text-secondary);
		text-decoration: none;
		margin-bottom: 1rem;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--text-color);
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--text-color);
		line-height: 1.2;
	}

	.date {
		font-size: 0.95rem;
		color: var(--text-tertiary);
	}

	.content :global(h2) {
		font-size: 1.8rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		color: var(--text-color);
	}

	.content :global(h3) {
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: var(--text-color);
	}

	.content :global(p) {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text-color);
		margin-bottom: 1.5rem;
	}

	/* Inline code styling */
	.content :global(code:not(pre code)) {
		background-color: var(--hover-bg);
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
		color: var(--text-color);
	}

	/* Shiki code blocks - let Shiki handle the styling */
	.content :global(pre) {
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin-bottom: 1.5rem;
		border: 1px solid var(--border-color);
	}

	.content :global(pre code) {
		background-color: transparent !important;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	/* Shiki theme switching support */
	.content :global(pre[class*="shiki"]) {
		background-color: transparent !important;
	}

	:global([data-theme="light"]) .content :global(.shiki),
	:global([data-theme="light"]) .content :global(.shiki span) {
		color: var(--shiki-light) !important;
		background-color: var(--shiki-light-bg) !important;
	}

	:global([data-theme="dark"]) .content :global(.shiki),
	:global([data-theme="dark"]) .content :global(.shiki span) {
		color: var(--shiki-dark) !important;
		background-color: var(--shiki-dark-bg) !important;
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.content :global(li) {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text-color);
		margin-bottom: 0.5rem;
	}

	.content :global(blockquote) {
		border-left: 4px solid var(--border-color);
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		color: var(--text-secondary);
		font-style: italic;
	}

	.content :global(a) {
		color: var(--link-color);
		text-decoration: none;
		border-bottom: 1px solid var(--border-color);
		transition: border-color 0.2s ease;
	}

	.content :global(a:hover) {
		border-color: var(--link-color);
	}
</style>
