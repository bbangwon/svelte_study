<script>
  import { bests, bestTexts } from "../store";
  import Icon from "@iconify/svelte";
  import { v4 as uuidv4 } from "uuid";

  const id01 = uuidv4();
  const id02 = uuidv4();
  const id03 = uuidv4();
  const id04 = uuidv4();

  let open = $state(false);

  const onToggle = () => {
    open = !open;
    if (!open) {
      bestTexts.resetForm();
    }
  };

  const onClose = () => (open = false);

  const onDataChange = (e) => {
    const { name, value } = e.target;

    $bestTexts = { ...$bestTexts, [name]: value };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    bests.onSubmit($bestTexts);
    bestTexts.resetForm();
  };
</script>

<div>
  <form
    class={open ? "createform active" : "createform"}
    onsubmit={(e) => {
      onSubmit(e);
      onClose();
    }}
  >
    <fieldset>
      <legend>여행 추가하기</legend>
      <label for={id01}>여행명 : </label>
      <input
        type="text"
        id={id01}
        name="name"
        bind:value={$bestTexts.name}
        required
      />
      <label for={id02}>가격 : </label>
      <input
        type="text"
        id={id02}
        name="price"
        bind:value={$bestTexts.price}
        placeholder="숫자로만 입력하세요"
        required
      />
      <label for={id03}>이미지 경로 : </label>
      <input
        type="text"
        id={id03}
        name="image"
        bind:value={$bestTexts.image}
        required
      />
      <br />
      <label for={id04} class="dlabel">설명 : </label>
      <textarea
        rows="5"
        id={id04}
        name="descript"
        bind:value={$bestTexts.descript}
        required></textarea>
      <br />
      <button type="submit">여행 추가하기</button>
    </fieldset>
  </form>
  <button class="circlebox" onclick={onToggle}
    ><Icon icon="ic:round-add" /></button
  >
</div>
