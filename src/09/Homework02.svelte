<script>
  let check = $state(false);
</script>

<label>
  <input type="checkbox" bind:checked={check} />
  오늘 드림으로 받아보시겠어요?
</label>
{#if check}
  <p>기본 배송지 : 서울시</p>
{/if}
