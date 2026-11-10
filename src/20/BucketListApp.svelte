<script>
  import BucketHeader from "./components/BucketHeader.svelte";
  import BucketList from "./components/BucketList.svelte";
  import BucketCreate from "./components/BucketCreate.svelte";
  import { initialBuckets } from "./bucketData.js";
  import { v4 as uuidv4 } from "uuid";

  let buckets = $state(initialBuckets);
  let editMode = $state("");
  let bucketText = $state("");

  //체크 개수를 담은 반응성 변수 선언
  let chkCount = $derived(buckets.filter((bucket) => !bucket.chk).length);

  //이벤트 함수
  //1. chk 속성값 변경 - CSS 변화가 된다고 값이 변경되지 않음
  const onToggle = (id) => {
    buckets = buckets.map((bucket) => {
      return bucket.id === id ? { ...bucket, chk: !bucket.chk } : bucket;
    });
  };

  const onRemove = (id) => {
    buckets = buckets.filter((bucket) => bucket.id !== id);
  };

  // 편집 모드 설정
  const onEditMode = (id) => {
    editMode = id;
  };

  // 편집 모드 해제
  const offEditMode = () => {
    editMode = "";
  };

  // 편집 항목 적용
  const onEditItem = (editBucket) => {
    buckets = buckets.map((bucket) => {
      if (bucket.id === editBucket.id) {
        bucket = editBucket;
      }
      return bucket;
    });
    offEditMode();
  };

  // 엔터 키 입력 시 편집 항목 적용
  const onEditKeyup = (e, editBucket) => {
    if (e.keyCode === 13) {
      onEditItem(editBucket);
    }
  };

  // 새로운 항목 추가
  const onDataChange = (e) => {
    bucketText = e.target.value;
  };

  //
  const onSubmit = (e) => {
    e.preventDefault();

    if (bucketText) {
      const bucket = {
        id: uuidv4(),
        text: bucketText,
        chk: false,
      };
      buckets = [...buckets, bucket];
    }
  };
</script>

<svelte:head>
  <title>My Bucket List</title>
  <link rel="stylesheet" href="./20/global.css" />
</svelte:head>
<div class="bucketbox">
  <BucketHeader {chkCount} />
  <BucketList
    {buckets}
    {onToggle}
    {onRemove}
    {editMode}
    {onEditMode}
    {onEditKeyup}
  />
  <BucketCreate {bucketText} {onDataChange} {onSubmit} />
</div>
