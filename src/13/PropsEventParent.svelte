<script>
  import PropsEventChild from "./PropsEventChild.svelte";
  let { onAdd } = $props();
</script>

<PropsEventChild {onAdd} />
