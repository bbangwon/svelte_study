<div class="question-child">
  <p>이름 : <slot name="name"></slot></p>
  <p>출생년도 : <slot name="birth"></slot></p>
  <p>도시 : <slot name="city"></slot></p>
  <p>우승 : <slot name="win"></slot></p>
</div>

<style>
  .question-child {
    border: 1px solid #000;
    padding: 10px;
    margin: 10px 0;
  }
</style>
