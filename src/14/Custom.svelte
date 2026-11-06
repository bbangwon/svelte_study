<script>
  import { count } from "./store04";
</script>

<h1>현재 값 : {$count}</h1>
<button onclick={count.increment}>+</button>
<button onclick={count.decrement}>-</button>
<button onclick={count.reset}>Reset</button>
