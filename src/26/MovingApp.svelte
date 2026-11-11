<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/common/Header.svelte";
  import Footer from "./components/common/Footer.svelte";
  import MainPage from "./pages/MainPage.svelte";
  import NowPage from "./pages/NowPage.svelte";
  import PopularPage from "./pages/PopularPage.svelte";
  import TopPage from "./pages/TopPage.svelte";
  import UpcomingPage from "./pages/UpcomingPage.svelte";
  import NowSubPage from "./pages/NowSubPage.svelte";
  import PopularSubPage from "./pages/PopularSubPage.svelte";
  import UpcomingSubPage from "./pages/UpcomingSubPage.svelte";
  import TopSubPage from "./pages/TopSubPage.svelte";

  let { url = "" } = $props();
</script>

<svelte:head>
  <title>MOVING</title>
  <link rel="stylesheet" href="./26/global.css" />
</svelte:head>
<Header />
<Router {url}>
  <Route path="/"><MainPage /></Route>
  <Route path="/now"><NowPage /></Route>
  <Route path="/popular"><PopularPage /></Route>
  <Route path="/top"><TopPage /></Route>
  <Route path="/upcoming"><UpcomingPage /></Route>
  <Route path="/now/:id"><NowSubPage /></Route>
  <Route path="/popular/:id"><PopularSubPage /></Route>
  <Route path="/top/:id"><TopSubPage /></Route>
  <Route path="/upcoming/:id"><UpcomingSubPage /></Route>
</Router>
<Footer />
