<script>
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const tween = new Tween(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<progress value={tween.current}></progress>

<button onclick={() => (tween.target = 0)}>0%</button>
<button onclick={() => (tween.target = 0.25)}>25%</button>
<button onclick={() => (tween.target = 0.5)}>50%</button>
<button onclick={() => (tween.target = 0.75)}>75%</button>
<button onclick={() => tween.set(1)}>100%</button>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
