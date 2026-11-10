<script>
  import Icon from "@iconify/svelte";
  import { v4 as uuidv4 } from "uuid";

  let chkId = uuidv4();

  let { bucket, onToggle, onRemove, editMode, onEditMode, onEditKeyup } =
    $props();
</script>

<div class="bucketitem">
  <input type="checkbox" id={chkId} bind:checked={bucket.chk} />
  <label
    for={chkId}
    class="checkcircle"
    onclick={() => onToggle(bucket.id)}
    onkeydown={() => onToggle(bucket.id)}
    role="presentation"
  >
    <Icon icon="ic:round-check" />
  </label>
  {#if editMode === bucket.id}
    <input
      type="text"
      bind:value={bucket.text}
      onkeyup={(e) => onEditKeyup(e, bucket)}
    />
  {:else}
    <p ondblclick={() => onEditMode(bucket.id)}>{bucket.text}</p>
  {/if}
  <button class="remove" onclick={() => onRemove(bucket.id)}>
    <Icon icon="gridicons:trash" />
  </button>
</div>
