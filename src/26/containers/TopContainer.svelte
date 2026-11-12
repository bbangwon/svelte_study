<script>
  import { topPromise } from "../libs/store";
  import { tops } from "../libs/store";
  import { genres } from "../libs/store";
  import MainLoading from "../components/common/MainLoading.svelte";
  import ListSub from "../components/common/ListSub.svelte";
  import Error from "../components/common/Error.svelte";

  let { id } = $props();

  const promise = $topPromise;
  let datas = $state([]);
  let genresDatas = $state([]);

  $tops.then((value) => (datas = value));
  $genres.then((value) => (genresDatas = value));
</script>

{#await promise}
  <MainLoading />
{:then}
  <ListSub {id} {datas} genres={genresDatas} />
{:catch error}
  <Error />
{/await}
