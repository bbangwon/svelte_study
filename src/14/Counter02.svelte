<script>
  import { count } from "./store01.js";
  import Increment from "./Increment.svelte";
  import Decrement from "./Decrement.svelte";
  import Reset from "./Reset.svelte";

  let countValue = $state();
  const unsubscribe = count.subscribe((value) => {
    countValue = value;
  });
</script>

<h1>count값: {countValue}</h1>
<Increment />
<Decrement />
<Reset />
