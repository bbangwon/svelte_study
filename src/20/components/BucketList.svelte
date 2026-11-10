<script>
  import BucketItem from "./BucketItem.svelte";

  let { buckets, onToggle, onRemove, editMode, onEditMode, onEditKeyup } =
    $props();
</script>

<div class="bucketlist">
  {#each buckets as bucket, index (bucket)}
    <BucketItem
      {bucket}
      {onToggle}
      {onRemove}
      {editMode}
      {onEditMode}
      {onEditKeyup}
    />
  {/each}
</div>
