<script>
  let num = $state(0);

  $effect.pre(() => {
    console.log(`$effect.pre() 실행 ${num}`);
  });

  $effect(() => {
    console.log(`$effect() 실행 ${num}`);
  });

  const handleClick = () => num++;
</script>

<button onclick={handleClick}>숫자 증가</button>
<p>현재 숫자 : {num}</p>
