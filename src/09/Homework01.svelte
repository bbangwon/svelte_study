<script>
  let score = $state(0);
</script>

<label>
  점수입력:
  <input type="number" min="0" max="100" bind:value={score} />
  점
</label>
{#if score >= 80}
  <p>합격입니다.</p>
{:else}
  <p>불합격입니다.</p>
{/if}
