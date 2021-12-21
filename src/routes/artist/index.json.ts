import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { slug } = params;
  console.log(slug);
	const { artists } = await api.get(`search.php?s=${slug}`, locals.user && locals.user.token);

	return {
		body: artists
	};
}

export async function put(request) {
	console.log('put', request);
}