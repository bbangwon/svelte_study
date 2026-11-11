<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./common/Header.svelte";
  import Main from "./pages/Main.svelte";
  import Map from "./pages/Map.svelte";
  import Company from "./pages/Company.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Footer from "./common/Footer.svelte";

  let { url = "" } = $props();
</script>

<Header />
<Router {url}>
  <Route path="/"><Main /></Route>
  <Route path="/map"><Map /></Route>
  <Route path="/company"><Company /></Route>
  <Route path="*"><NotFound /></Route>
</Router>
<Footer />
