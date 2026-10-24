<script>
  let langs = [
    {
      name: '스벨트(Svelte',
      release: 2016,
      src: 'https://svelte.dev/favicon.png'
    },
    {
      name: '리액트(React)',
      release: 2013,
      src: 'https://ko.legacy.reactjs.org/favicon.ico'
    },
    {
      name: '뷰(Vue)',
      release: 2013,
      src: 'https://v2.ko.vuejs.org/images/logo.png'
    }
  ];
</script>

{#each langs as lang}
  <h3>이름 : {lang.name}</h3>
  <h3>배포 연도 : {lang.release}년</h3>
  <img src={lang.src} alt={lang.name} width="50"/>
{/each}