<script>
  import PropsChild from "./PropsChild.svelte";
  let { num } = $props();
</script>

<div>
  <h2>Father 구역</h2>
  <hr />
  <PropsChild {num} />
</div>
