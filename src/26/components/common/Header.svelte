<script>
  import { links } from "svelte-routing";
  import Icon from "@iconify/svelte";
</script>

<header use:links>
  <h1><a href="/"><img src="./26/img/moving_logo.svg" alt="무빙로고" /></a></h1>
  <ul>
    <li>
      <a href="/now"
        ><Icon icon="ic:round-live-tv" color="white" height="28" />현재상영작</a
      >
    </li>
    <li><a href="/popular">인기영화</a></li>
    <li><a href="/upcoming">상영예정작</a></li>
    <li><a href="/top">높은평점</a></li>
  </ul>
</header>
