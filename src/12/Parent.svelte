<script>
  import Child from "./Child.svelte";

  let isChildElementView = $state(false);

  const handleClick = (bool) => {
    isChildElementView = bool;
  };
</script>

<h2>부모 컴포넌트</h2>
<button onclick={() => handleClick(true)}>자식 컴포넌트 활성화</button>
<button onclick={() => handleClick(false)}>자식 컴포넌트 비활성화</button>
<hr />
{#if isChildElementView}
  <Child />
{/if}
