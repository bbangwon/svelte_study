<script>
  import NowContainer from "../containers/NowContainer.svelte";
  let { id } = $props();
</script>

<NowContainer id={parseInt(id, 10)} />
