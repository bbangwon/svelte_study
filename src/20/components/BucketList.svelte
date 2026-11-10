<script>
  import BucketItem from "./BucketItem.svelte";

  let { buckets } = $props();
</script>

<div class="bucketlist">
  {#each buckets as bucket, index (bucket)}
    <BucketItem {bucket} />
  {/each}
</div>
