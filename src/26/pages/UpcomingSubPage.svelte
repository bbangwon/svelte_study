<script>
  import UpcomingContainer from "../containers/UpcomingContainer.svelte";

  let { id } = $props();
</script>

<UpcomingContainer id={parseInt(id, 10)} />
