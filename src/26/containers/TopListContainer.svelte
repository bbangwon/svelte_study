<script>
  import { topPromise } from "../libs/store";
  import { tops } from "../libs/store";
  import LoadingList from "../components/common/LoadingList.svelte";
  import TopList from "../components/sub/TopList.svelte";
  import Error from "../components/common/Error.svelte";

  const promise = $topPromise;
</script>

{#await promise}
  <LoadingList />
{:then data}
  <TopList datas={$tops} />
{:catch error}
  <Error />
{/await}
