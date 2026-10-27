<script>
  let langs = [
    {
      id: 1,
      name: "스벨트( Svelte )",
      release: 2016,
      src: "https://svelte.dev/favicon.png",
    },
    {
      id: 2,
      name: "리액트( React )",
      release: 2013,
      src: "https://react.dev/favicon.ico",
    },
    {
      id: 3,
      name: "뷰( Vue )",
      release: 2013,
      src: "https://vuejs.org/images/logo.png",
    },
  ];
</script>

<h3>웹 프론트엔드 언어</h3>
{#each langs as lang}
  <div style="border: 2px solid black; width: 200px; padding: 10px;">
    <h4>이름 : {lang.name}</h4>
    <p>배포 년도 : {lang.release}년</p>
    <img src={lang.src} alt={lang.name} height="50" />
  </div>
{/each}
