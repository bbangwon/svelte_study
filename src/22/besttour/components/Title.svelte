<script>
  import { link } from "svelte-routing";

  let { name } = $props();
</script>

<h2><a use:link href="/">{name}</a></h2>
