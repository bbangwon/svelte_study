<script>
  import { buckets } from "../store.js";
  import Icon from "@iconify/svelte";
  import { v4 as uuidv4 } from "uuid";

  let chkId = uuidv4();
  export let bucket;

  const { onToggle, onRemove, onEditMode, offEditMode, onEditItem } = buckets;

  const onEditKeyup = (e) => {
    if (e.key === 13) {
      onEditItem(bucket);
      offEditMode();
    }
  };
</script>

<div class="bucketitem">
  <input
    type="checkbox"
    id={chkId}
    checked={bucket.chk}
    onchange={() => onToggle(bucket.id)}
  />
  <label for={chkId} class="checkcircle">
    <Icon icon="ic:round-check" />
  </label>
  {#if $buckets.editMode === bucket.id}
    <input type="text" value={bucket.text} onkeyup={(e) => onEditKeyup(e)} />
  {:else}
    <p ondblclick={() => onEditMode(bucket.id)}>{bucket.text}</p>
  {/if}
  <button class="remove" onclick={() => onRemove(bucket.id)}>
    <Icon icon="gridicons:trash" />
  </button>
</div>
