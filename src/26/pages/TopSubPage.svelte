<script>
  import TopContainer from "../containers/TopContainer.svelte";

  let { id } = $props();
</script>

<TopContainer id={parseInt(id, 10)} />
