<script>
  //crossfade 호출
  import { crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  //crossfade() 내부 값 비구조화 할당
  const [send, receive] = crossfade({
    duration: 400, //보내고 받을 때의 시간 지정
    easing: quintOut, //보내고 받을 때의 easing 함수 지정
  });

  let bid = 1;
  let buckets = $state([
    { id: bid++, chk: false, text: "웹 프론트엔드 개발자되기" },
    { id: bid++, chk: false, text: "유럽 여행하기" },
    { id: bid++, chk: false, text: "영국 가서 손흥민 축구 경기 보기" },
  ]);
  //남은 버킷 개수
  let remainigBuckets = $derived(
    buckets.filter((bucket) => !bucket.chk).length,
  );

  //완료 버킷 리스트
  let finished = $state([]);
  let finishedBuckets = $derived(
    finished.filter((bucket) => bucket.chk).length,
  );

  //버킷 리스트 추가 이벤트 함수
  const onAdd = () => {
    buckets = buckets.concat({ id: bid++, chk: false, text: "" });
  };

  //배열 데이터를 이동하는 함수 선언
  const move = (item, from, to) => {
    //item : 선택된 요소, from : 요소의 현재 배열, to: 이동할 배열
    to.push(item);
    return [from.filter((i) => i !== item), to];
  };

  //B 영역의 요소를 A영역으로 보내는 함수 선언
  const moveLeft = (item) => {
    [finished, buckets] = move(item, finished, buckets);
  };

  //A영역의 요소를 B영역으로 보내는 함수 선언
  const moveRight = (item) => {
    [buckets, finished] = move(item, buckets, finished);
  };
</script>

<h1>Bucket List</h1>
<div class="bucketBlock">
  <!-- 미 완료 구역 -->
  <div class="unfinished">
    <h2>Unfinished Buckets</h2>
    {#each buckets as bucket (bucket.id)}
      <div in:receive={{ key: bucket.id }} out:send={{ key: bucket.id }}>
        <input
          type="checkbox"
          bind:checked={bucket.chk}
          onchange={() => moveRight(bucket)}
        />
        <input
          type="text"
          placeholder="당신의 버킷리스트는 뭔가요?"
          style="width: 250px"
          bind:value={bucket.text}
          disabled={bucket.chk}
        />
      </div>
    {/each}
    <p>남은 버킷 리스트 : {remainigBuckets}</p>
    <button onclick={onAdd}>새로운 버킷 추가</button>
  </div>
  <!-- 완료 구역 -->
  <div class="finished">
    <h2>finished Buckets</h2>
    {#each finished as bucket (bucket.id)}
      <div in:receive={{ key: bucket.id }} out:send={{ key: bucket.id }}>
        <input
          type="checkbox"
          bind:checked={bucket.chk}
          onchange={() => moveLeft(bucket)}
        />
        <input
          type="text"
          placeholder="당신의 버킷리스트는 뭔가요?"
          style="width: 250px"
          bind:value={bucket.text}
          disabled={bucket.chk}
        />
      </div>
    {/each}
    <p>완료된 버킷 리스트 : {finishedBuckets}</p>
  </div>
</div>

<style>
  .bucketBlock {
    display: flex;
  }
  .unfinished {
    margin-right: 40px;
  }
</style>
