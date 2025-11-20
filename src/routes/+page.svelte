<script lang="ts">
</script>

<div class="container">
	<h1>Welcome to clay.frrs.dev</h1>
	<p>Hi! I'm Clay. This is my personal website where I share thoughts, projects, and ideas.</p>

	<div class="quick-links">
		<a href="/about" class="link-card">
			<h2>About Me</h2>
			<p>Learn more about who I am and what I do</p>
		</a>

		<a href="/blog" class="link-card">
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
		color: #333;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.6;
		color: #666;
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
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.link-card:hover {
		border-color: #333;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.link-card h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.link-card p {
		font-size: 1rem;
		margin-bottom: 0;
		color: #666;
	}
</style>
