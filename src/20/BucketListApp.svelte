<script>
  import BucketHeader from "./components/BucketHeader.svelte";
  import BucketList from "./components/BucketList.svelte";
  import BucketCreate from "./components/BucketCreate.svelte";
  import { initialBuckets } from "./bucketData.js";

  let buckets = $state(initialBuckets);
</script>

<svelte:head>
  <title>My Bucket List</title>
  <link rel="stylesheet" href="./20/global.css" />
</svelte:head>
<div class="bucketbox">
  <BucketHeader />
  <BucketList {buckets} />
  <BucketCreate />
</div>
