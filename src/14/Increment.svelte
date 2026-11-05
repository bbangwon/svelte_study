<script>
  import { count } from "./store01.js";

  const increment = () => {
    count.update((n) => n + 1);
  };
</script>

<button onclick={increment}> + </button>
