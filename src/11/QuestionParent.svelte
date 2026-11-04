<script>
  import QuestionChild from "./QuestionChild.svelte";
</script>

<QuestionChild>
  <span slot="name">LG트윈스</span>
  <span slot="birth">1990</span>
  <span slot="city">서울</span>
  <span slot="win">4회 (1990, 1994, 2023, 2025)</span>
</QuestionChild>

<QuestionChild>
  <span slot="name">한화 이글스</span>
  <span slot="birth">1986</span>
  <span slot="city">대전</span>
  <span slot="win">1회(1999)</span>
</QuestionChild>
