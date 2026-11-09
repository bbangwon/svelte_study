<script>
  let isInput = $state(false);
  let inputValue = $state("아직 없음");

  const handleClick = (param) => {
    isInput = param;
  };

  const inputFocus = (node, value) => {
    node.focus();
    node.value = value;
  };
</script>

<button onclick={() => handleClick(true)}>활성</button>
<button onclick={() => handleClick(false)}>비활성</button>
<hr />
{#if isInput}
  <input type="text" bind:value={inputValue} use:inputFocus={inputValue} />
{/if}
<h3>입력 값 : {inputValue}</h3>
