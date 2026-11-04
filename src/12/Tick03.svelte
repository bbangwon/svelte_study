<script>
  import { tick } from "svelte";

  let isElementView = $state(false);
  let input;

  const handleClick = async (param) => {
    isElementView = param;
    await tick();
    if (isElementView) {
      input.focus();
    }
  };
</script>

<button onclick={() => handleClick(true)}>input 활성화</button>
<button onclick={() => handleClick(false)}>input 비활성화</button>
{#if isElementView}
  <div>
    <input type="text" bind:this={input} />
  </div>
{/if}
