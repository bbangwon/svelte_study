<script>
  import Child from "./Child.svelte";
  let parentValue = $state(1);
</script>

<Child childValue={parentValue} />
<p>부모 값 : {parentValue}</p>
