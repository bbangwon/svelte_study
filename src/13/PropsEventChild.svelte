<script>
  let { onAdd } = $props();

  const addAction = (param) => {
    onAdd(param);
  };
</script>

<button onclick={() => addAction(1)}>1씩 증가</button>
<button onclick={() => addAction(2)}>2씩 증가</button>
