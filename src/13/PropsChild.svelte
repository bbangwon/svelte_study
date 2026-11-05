<script>
  let { num } = $props();

  let square = $derived(num * num);
</script>

<div>
  <h3>Child 구역</h3>
  <p>제곱 값 : {square}</p>
</div>
