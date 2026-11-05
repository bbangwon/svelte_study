<script>
  import { count } from "./store01.js";

  const decrement = () => {
    count.update((n) => n - 1);
  };
</script>

<button onclick={decrement}> - </button>
