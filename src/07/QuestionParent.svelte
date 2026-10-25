<script>
  import QuestionChild from "./QuestionChild.svelte";
  const allData = [
    {
      name: "LG트윈스",
      year: 1990,
      city: "서울",
      win: "4회 (1990, 1994, 2023, 2025)",
    },
    {
      name: "한화 이글스",
      year: 1986,
      city: "대전",
      win: "1회(1999)",
    },
  ];
</script>

{#each allData as data}
  <QuestionChild {...data} />
  <hr />
{/each}
