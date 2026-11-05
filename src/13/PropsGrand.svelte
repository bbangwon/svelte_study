<script>
  import PropsFather from "./PropsFather.svelte";

  let num = $state(1);
</script>

<div>
  <h1>Grand 구역</h1>
  <button onclick={() => num++}>1씩 증가</button>
  <p>기본 숫자 : {num}</p>
  <hr />
  <PropsFather {num} />
</div>
