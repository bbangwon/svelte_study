<script>
  import Title from "./components/Title.svelte";
  import BestList from "./components/BestList.svelte";
  import BestTour from "./components/BestCreate.svelte";
</script>

<svelte:head>
  <title>BEST TOUR</title>
  <link rel="stylesheet" href="./21/global.css" />
</svelte:head>

<div class="bestbox">
  <Title name="BEST TOUR" />
  <BestList />
  <BestTour />
</div>
