import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { slug } = params;
	const { trending } = await api.get(`trending.php?country=gb&type=itunes&format=albums`, locals.user && locals.user.token);

	return {
		body: trending
	};
}

export async function put(request) {
	console.log('put', request);
}