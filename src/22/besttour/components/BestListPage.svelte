<script>
  import { bests } from "../store";
  import { link } from "svelte-routing";
</script>

<ul use:link>
  {#each $bests as best, index (best.id)}
    <li>
      <a href={`/${best.id}?like=${best.like}`}>
        <img src={best.image} alt={best.name} />
        <div class="box">
          <h3>{best.name}</h3>
        </div>
      </a>
    </li>
  {/each}
</ul>
