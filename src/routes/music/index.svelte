<script context="module">
	export async function load({ fetch }) {
		const [trending, loved] = await Promise.all([
			fetch(`/music/trending.json`).then((r) => r.json()),
      fetch(`/music/most-loved.json`).then((r) => r.json()),
		]);

		return {
			props: { trending, loved }
		};
	}
</script>

<script lang="ts">
export let trending, loved;
</script>

<style lang="scss">
  .list {
    display: flex;
    grid-gap: 20px;
    flex-wrap: wrap;

    h2 {
      flex: 0 0 100%;
    }

    &__item {
      flex: 0 0 135px;
      font-size: 13px;
      h3 {
        font-size: 13px;
      }

      img {
        width: 135px;
      }

      h3, p {
        margin: 0;
      }
    }
  }
</style>

<div>
  <h1>Music</h1>
  <hr>
  <div class="list">
    <h2>Trending</h2>
    {#each trending as trendingAlbum, i}
      <div class="list__item">
        <img src={trendingAlbum.strAlbumThumb} alt={trendingAlbum.strAlbum} />
        <h3>{trendingAlbum.strAlbum}</h3>
      </div>
    {/each}
  </div>
  <hr>
  <div class="list">
    <h2>Most Loved Tracks</h2>
    {#each loved as lovedTrack, i}
      <div class="list__item">
        <h3><a href={`/artist/${lovedTrack.strArtist}`}>{lovedTrack.strArtist}</a></h3>
        <p>{lovedTrack.strTrack}</p>
        <p>{lovedTrack.strGenre}</p>
      </div>
    {/each}
  </div>
</div>

