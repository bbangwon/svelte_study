<script>
  import PopularContainer from "../containers/PopularContainer.svelte";
  let { id } = $props();
</script>

<PopularContainer id={parseInt(id, 10)} />
