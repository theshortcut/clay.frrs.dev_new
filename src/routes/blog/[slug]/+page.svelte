<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} - clay.frrs.dev</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="container">
	<header>
		<a href="/blog" class="back-link">← Back to Blog</a>
		<h1>{data.metadata.title}</h1>
		<p class="date">{new Date(data.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
	</header>

	<div class="content">
		<svelte:component this={data.content} />
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
		color: #666;
		text-decoration: none;
		margin-bottom: 1rem;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: #333;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: #333;
		line-height: 1.2;
	}

	.date {
		font-size: 0.95rem;
		color: #999;
	}

	.content :global(h2) {
		font-size: 1.8rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		color: #333;
	}

	.content :global(h3) {
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: #444;
	}

	.content :global(p) {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #444;
		margin-bottom: 1.5rem;
	}

	.content :global(code) {
		background-color: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
	}

	.content :global(pre) {
		background-color: #f5f5f5;
		padding: 1rem;
		border-radius: 5px;
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}

	.content :global(pre code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.content :global(li) {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #444;
		margin-bottom: 0.5rem;
	}

	.content :global(blockquote) {
		border-left: 4px solid #e0e0e0;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		color: #666;
		font-style: italic;
	}

	.content :global(a) {
		color: #0066cc;
		text-decoration: none;
		border-bottom: 1px solid #cce0ff;
		transition: border-color 0.2s ease;
	}

	.content :global(a:hover) {
		border-color: #0066cc;
	}
</style>
