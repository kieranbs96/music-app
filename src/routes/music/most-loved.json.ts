import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { slug } = params;
	const { loved } = await api.get(`mostloved.php?format=track`, locals.user && locals.user.token);

	return {
		body: loved
	};
}

export async function put(request) {
	console.log('put', request);
}