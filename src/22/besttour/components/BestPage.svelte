<script>
  import { bests } from "../store";
  import queryString from "query-string";
  import { useLocation } from "svelte-routing";
  import Icon from "@iconify/svelte";

  let { id } = $props();

  const best = $bests[id - 1];
  const { name, price, descript, image, like } = best;

  const location = useLocation();

  let parsed = $derived(queryString.parse($location.search));
</script>

<div class="bestpage">
  <img src={image} alt={name} />
  <div class="textwrap">
    <h4>
      {#if parsed.like === "true"}
        <Icon icon="tdesign:heart-filled" />
      {/if}
      {name}
    </h4>
    <p>{descript}</p>
    <span>￦ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
    <button>신청하기</button>
  </div>
</div>
