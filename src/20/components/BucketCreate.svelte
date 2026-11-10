<script>
  import { buckets, bucketText } from "../store";
  import Icon from "@iconify/svelte";

  let open = $state(false);

  const onToggle = () => {
    open = !open;
    bucketText.resetForm();
  };
  const onClose = () => (open = false);

  const onDataChange = (e) => {
    $bucketText = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    buckets.onSubmit($bucketText);
  };
</script>

<div class="bucketcreate">
  <div class={open ? "createform active" : "createform"}>
    <form
      onsubmit={(e) => {
        onSubmit(e);
        onClose();
      }}
    >
      <input
        type="text"
        placeholder="추가할 버킷 리스트를 입력 후, Enter를 누르세요."
        bind:value={$bucketText}
        onchange={onDataChange}
      />
    </form>
  </div>
  <button class="circlebox" onclick={onToggle}>
    <Icon icon="ic:round-add" />
  </button>
</div>
