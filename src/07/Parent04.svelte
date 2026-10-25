<script>
  import Child04 from "./Child04.svelte";
  const allData01 = {
    name: "김철수",
    age: 20,
    hobby: "축구",
  };
  const allData02 = {
    name: "이영희",
    age: 21,
    hobby: "넷플릭스 보기",
  };
</script>

<Child04 {...allData01} />
<Child04 {...allData02} />
