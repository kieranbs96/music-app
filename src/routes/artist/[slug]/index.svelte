<script context="module">
	export async function load({ page, fetch }) {
		const { slug } = page.params;
		const [artistData] = await Promise.all([
			fetch(`/artist/${slug}.json`).then((r) => r.json()),
		]);
		return {
			props: { artistData, slug }
		};
	}
</script>

<script>
	export let artistData;
	export let slug;
</script>

<div class="artist">
  <h1>{artistData.artistInfo.strArtist}</h1>
  <img src={artistData.artistInfo.strArtistThumb} alt={artistData.artistInfo.strArtist} />
  <p>{artistData.artistInfo.strBiographyEN}</p>
</div>
{#each artistData.album as album, i}
<div>
  <p>{album.strAlbum}</p>
</div>
{/each}