<script>
  let { lang, onclick } = $props();

  $effect(() => {
    console.log(lang.text + " : " + lang.like);
  });
</script>

<button {onclick}>
  {#if lang.like}
    <span>❤️</span>
  {:else}
    <span>♡</span>
  {/if}
  {lang.text}
</button>
