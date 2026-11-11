<script>
  import { bests } from "../store";
  import Icon from "@iconify/svelte";

  let { best } = $props();

  const { id, name, price, descript, image, like } = $derived(best);

  const { onToggle, onRemove } = bests;
</script>

<li>
  <a href="#!">
    <img src={image} alt={name} />
    <button class="likebox" onclick={() => onToggle(id)}>
      {#if like}
        <Icon icon="tdesign:heart-filled" />
      {:else}
        <Icon icon="tdesign:heart" />
      {/if}
    </button>
    <div class="box">
      <h4>{name}</h4>
      <h5>￦ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
      <p>{descript}</p>
      <button onclick={() => onRemove(id)}
        ><Icon icon="gridicons:trash" /></button
      >
    </div>
  </a>
</li>
