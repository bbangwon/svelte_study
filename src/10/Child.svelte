<script>
  export let childValue = 1;
  const double = () => (childValue *= 2);
</script>

<button onclick={double}>두 배 구하기</button>
<p>자손 값 : {childValue}</p>
