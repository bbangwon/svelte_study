<script>
  import BucketItem from "./BucketItem.svelte";
  import { fade, slide } from "svelte/transition";
  import { flip } from "svelte/animate";

  let { buckets, onToggle, onRemove, editMode, onEditMode, onEditKeyup } =
    $props();
</script>

<div class="bucketlist">
  {#each buckets as bucket, index (bucket.id)}
    <div in:fade out:slide animate:flip>
      <BucketItem
        {bucket}
        {onToggle}
        {onRemove}
        {editMode}
        {onEditMode}
        {onEditKeyup}
      />
    </div>
  {/each}
</div>
