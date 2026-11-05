<script>
  import PropsEventParent from "./PropsEventParent.svelte";

  let num = $state(0);

  const onAdd = (value) => {
    console.log(value);
    num += value;
  };
</script>

<p>num : {num}</p>
<PropsEventParent {onAdd} />
