<script>
  import Child03 from "./Child03.svelte";
  let age01 = $state(20);
  let age02 = $state(21);

  const agePlus = () => {
    age01++;
    age02++;
  };

  const ageMinus = () => {
    age01--;
    age02--;
  };
</script>

<Child03 name={"김철수"} age={age01} hobby={"축구"} />
<Child03 name="이영희" age={age02} hobby="넷플릭스 보기" />
<button onclick={ageMinus}>나이 감소</button>
<button onclick={agePlus}>나이 증가</button>
