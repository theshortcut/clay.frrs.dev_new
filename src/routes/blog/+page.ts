export const prerender = true;

export async function load() {
	const posts = import.meta.glob('./*.md', { eager: true });

	const postData = Object.entries(posts).map(([path, post]: [string, any]) => {
		const slug = path.replace('./', '').replace('.md', '');
		return {
			slug,
			...post.metadata
		};
	});

	// Sort by date, newest first
	postData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts: postData
	};
}
