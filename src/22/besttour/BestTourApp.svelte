<script>
  import { Router, Route } from "svelte-routing";
  import Title from "./components/Title.svelte";
  import BestListPage from "./components/BestListPage.svelte";
  import BestPage from "./components/BestPage.svelte";

  let { url = "" } = $props();
</script>

<svelte:head>
  <link rel="stylesheet" href="./22/global.css" />
</svelte:head>

<div class="bestbox">
  <Title name="BEST TOUR" />
  <Router {url}>
    <Route path="/"><BestListPage /></Route>
    <Route path="/:id" let:params><BestPage id={params.id} /></Route>
  </Router>
</div>
