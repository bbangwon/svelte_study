<script>
  import { links } from "svelte-routing";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let header = $state();

  const handleScroll = () => {
    let windowTop = window.scrollY;

    if (windowTop > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let current = $state("");
</script>

<header use:links bind:this={header}>
  <h1>
    <a href="/" class:active={current === ""} onclick={() => (current = "")}
      ><img src="./26/img/moving_logo.svg" alt="무빙로고" /></a
    >
  </h1>
  <ul>
    <li>
      <a
        href="/now"
        class:active={current === "now"}
        onclick={() => (current = "now")}
        ><Icon icon="ic:round-live-tv" color="white" height="28" />현재상영작</a
      >
    </li>
    <li>
      <a
        href="/popular"
        class:active={current === "popular"}
        onclick={() => (current = "popular")}>인기영화</a
      >
    </li>
    <li>
      <a
        href="/upcoming"
        class:active={current === "upcoming"}
        onclick={() => (current = "upcoming")}>상영예정작</a
      >
    </li>
    <li>
      <a
        href="/top"
        class:active={current === "top"}
        onclick={() => (current = "top")}>높은평점</a
      >
    </li>
  </ul>
</header>
