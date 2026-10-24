<script>
  let num = $state(0);

  //기존 변수에서 1씩 증가
  const increaseNumber = () => num++;

  //기존 변수에서 1씩 감소
  const decreaseNumbber = () => num--;

</script>

<button onclick={increaseNumber}>+</button>
<button onclick={decreaseNumbber}>-</button>
<hr>
<h1>클릭횟수 : {num}</h1>