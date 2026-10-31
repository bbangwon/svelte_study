<script>
  let foods = ["떡볶이", "순대", "오뎅", "튀김"];
  let selected = $state("");
</script>

<h3>OSSAM 분식</h3>

{#each foods as food}
  <label>
    <input type="checkbox" bind:group={selected} value={food} />
    {food}
  </label>
{/each}

{#if selected.length === 0}
  <p>주문하실 메뉴를 선택해주세요.</p>
{:else}
  <p>선택 메뉴: {selected}</p>
{/if}
