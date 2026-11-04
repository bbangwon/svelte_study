<script>
  let hovering = $state();
  const enter = () => (hovering = true);
  const leave = () => (hovering = false);
</script>

<div class="box">
  <h4 onmouseenter={enter} onmouseleave={leave}>
    이름 :
    <slot {hovering}>전달받은 이름이 없습니다.</slot>
  </h4>
</div>

<style>
  .box {
    width: 320px;
    padding: 10px;
    border: 2px solid black;
    margin-bottom: 20px;
  }
</style>
