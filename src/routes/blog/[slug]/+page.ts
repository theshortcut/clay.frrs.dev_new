import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);

		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw error(404, `Blog post not found`);
	}
}
