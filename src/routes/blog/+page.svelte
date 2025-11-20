<script lang="ts">
	let { data } = $props();
</script>

<div class="container">
	<h1>Blog</h1>

	{#if data.posts.length === 0}
		<p class="no-posts">No blog posts yet. Check back soon!</p>
	{:else}
		<div class="posts">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="post-card">
					<h2>{post.title}</h2>
					<p class="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
					<p class="description">{post.description}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #333;
	}

	.no-posts {
		font-size: 1.1rem;
		color: #666;
		text-align: center;
		padding: 3rem 0;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.post-card {
		padding: 1.5rem;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.post-card:hover {
		border-color: #333;
		transform: translateX(4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.post-card h2 {
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.date {
		font-size: 0.9rem;
		color: #999;
		margin-bottom: 0.75rem;
	}

	.description {
		font-size: 1.05rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
	}
</style>
