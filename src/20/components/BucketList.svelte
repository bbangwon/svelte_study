<script>
  import { buckets } from "../store.js";
  import { fade, slide } from "svelte/transition";
  import { flip } from "svelte/animate";
  import BucketItem from "./BucketItem.svelte";
</script>

<div class="bucketlist">
  {#each $buckets.buckets as bucket, index (bucket.id)}
    <div in:fade out:slide animate:flip>
      <BucketItem {bucket} />
    </div>
  {/each}
</div>
