<script>
  import { count } from "./store01.js";

  const reset = () => {
    count.set(0);
  };
</script>

<button onclick={reset}> Reset </button>
