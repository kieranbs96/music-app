import * as api from '$lib/api';

export async function get({ params, locals }) {
	const { slug } = params;
  console.log(slug);
	const { artists } = await api.get(`search.php?s=${slug}`, locals.user && locals.user.token);
  const { album } = await api.get(`searchalbum.php?s=${slug}`, locals.user && locals.user.token);

  const artistData = {
    artistInfo: artists[0],
    album
  }

	return {
		body: artistData
	};
}

export async function put(request) {
	console.log('put', request);
}