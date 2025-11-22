<script lang="ts">
	import { mediaCatalog } from '$lib/data/media';
	import type { MediaItem } from '$lib/data/media';

	const { music, books, games, lastUpdated } = mediaCatalog;

	function renderItem(item: MediaItem, type: 'music' | 'books' | 'games') {
		let subtitle = '';
		if (type === 'music' && item.artist) subtitle = item.artist;
		if (type === 'books' && item.author) subtitle = item.author;
		if (type === 'games' && item.developer) subtitle = item.developer;
		return { subtitle };
	}
</script>

<svelte:head>
	<title>Now - Clay Ferris</title>
	<meta name="description" content="What I'm currently listening to, reading, and playing" />
</svelte:head>

<article class="now-page">
	<header>
		<h1>What I'm Into Right Now</h1>
		<p class="intro">
			A catalog of music I'm listening to, books I've been reading, and games I'm playing.
		</p>
		<p class="last-updated">Last updated: {lastUpdated}</p>
	</header>

	<div class="catalog-grid">
		<!-- Music Section -->
		<section class="media-section">
			<h2>🎵 Music</h2>
			<div class="items">
				{#if music.length > 0}
					{#each music as item}
						<div class="media-item">
							{#if item.cover}
								<div class="cover">
									<img src={item.cover} alt={item.title} />
								</div>
							{/if}
							<div class="content">
								{#if item.link}
									<h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
								{:else}
									<h3>{item.title}</h3>
								{/if}
								{#if item.artist}
									<p class="subtitle">{item.artist}</p>
								{/if}
								{#if item.status}
									<p class="status">{item.status}</p>
								{/if}
								{#if item.notes}
									<p class="notes">{item.notes}</p>
								{/if}
							</div>
						</div>
					{/each}
				{:else}
					<p class="empty-state">Nothing here yet. Add some music to the catalog!</p>
				{/if}
			</div>
		</section>

		<!-- Books Section -->
		<section class="media-section">
			<h2>📚 Books</h2>
			<div class="items">
				{#if books.length > 0}
					{#each books as item}
						<div class="media-item">
							{#if item.cover}
								<div class="cover">
									<img src={item.cover} alt={item.title} />
								</div>
							{/if}
							<div class="content">
								{#if item.link}
									<h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
								{:else}
									<h3>{item.title}</h3>
								{/if}
								{#if item.author}
									<p class="subtitle">{item.author}</p>
								{/if}
								{#if item.status}
									<p class="status">{item.status}</p>
								{/if}
								{#if item.notes}
									<p class="notes">{item.notes}</p>
								{/if}
							</div>
						</div>
					{/each}
				{:else}
					<p class="empty-state">Nothing here yet. Add some books to the catalog!</p>
				{/if}
			</div>
		</section>

		<!-- Games Section -->
		<section class="media-section">
			<h2>🎮 Games</h2>
			<div class="items">
				{#if games.length > 0}
					{#each games as item}
						<div class="media-item">
							{#if item.cover}
								<div class="cover">
									<img src={item.cover} alt={item.title} />
								</div>
							{/if}
							<div class="content">
								{#if item.link}
									<h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
								{:else}
									<h3>{item.title}</h3>
								{/if}
								{#if item.developer}
									<p class="subtitle">{item.developer}</p>
								{/if}
								{#if item.status}
									<p class="status">{item.status}</p>
								{/if}
								{#if item.notes}
									<p class="notes">{item.notes}</p>
								{/if}
							</div>
						</div>
					{/each}
				{:else}
					<p class="empty-state">Nothing here yet. Add some games to the catalog!</p>
				{/if}
			</div>
		</section>
	</div>
</article>

<style>
	.now-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	header {
		margin-bottom: 3rem;
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--text-color);
	}

	.intro {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto 0.5rem;
	}

	.last-updated {
		font-size: 0.9rem;
		color: var(--text-secondary);
		font-style: italic;
	}

	.catalog-grid {
		display: grid;
		gap: 3rem;
	}

	.media-section h2 {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		color: var(--text-color);
		border-bottom: 2px solid var(--border-color);
		padding-bottom: 0.5rem;
	}

	.items {
		display: grid;
		gap: 1.5rem;
	}

	.media-item {
		display: flex;
		gap: 1rem;
		padding: 1.5rem;
		background: var(--surface-color);
		border-radius: 8px;
		border: 1px solid var(--border-color);
		transition: all 0.2s ease;
	}

	.media-item:hover {
		border-color: var(--link-color);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.cover {
		flex-shrink: 0;
		width: 100px;
		height: 100px;
		border-radius: 4px;
		overflow: hidden;
		background: var(--bg-color);
	}

	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		flex: 1;
		min-width: 0;
	}

	.content h3 {
		font-size: 1.2rem;
		margin: 0 0 0.5rem 0;
		color: var(--text-color);
	}

	.content h3 a {
		color: var(--text-color);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.content h3 a:hover {
		color: var(--link-color);
	}

	.subtitle {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0 0 0.5rem 0;
	}

	.status {
		display: inline-block;
		font-size: 0.85rem;
		color: var(--link-color);
		background: var(--bg-color);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		margin: 0 0 0.5rem 0;
		font-weight: 500;
	}

	.notes {
		font-size: 0.95rem;
		color: var(--text-color);
		margin: 0.5rem 0 0 0;
		line-height: 1.6;
	}

	.empty-state {
		padding: 2rem;
		text-align: center;
		color: var(--text-secondary);
		font-style: italic;
		background: var(--bg-color);
		border-radius: 8px;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}

		.media-item {
			flex-direction: column;
		}

		.cover {
			width: 100%;
			height: 200px;
		}
	}
</style>
