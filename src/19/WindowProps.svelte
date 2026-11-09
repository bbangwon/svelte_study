<script>
  let y = $state();
</script>

<svelte:window bind:scrollY={y} />
<div></div>
<h3>스크롤바 좌표: {y}</h3>

<style>
  div {
    height: 200vh; /* 스크롤을 위해 충분한 높이를 설정 */
  }
  h3 {
    position: fixed;
    left: 10px;
    top: 10px;
  }
</style>
