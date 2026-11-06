<script>
  let current = $state("first");
</script>

<button class:active={current === "first"} onclick={() => (current = "first")}
  >첫 번째 버튼</button
>
<button class:active={current === "second"} onclick={() => (current = "second")}
  >두 번째 버튼</button
>
<button class:active={current === "third"} onclick={() => (current = "third")}
  >세 번째 버튼</button
>

<style>
  button {
    border: none;
    border-radius: 5px;
    background-color: #ededed;
    padding: 5px 20px;
    cursor: pointer;
  }
  button::after {
    content: " - 비활성";
  }
  .active {
    background-color: cornflowerblue;
    color: white;
  }
  .active::after {
    content: " - 활성";
  }
</style>
