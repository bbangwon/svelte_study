<script>
  let phoneHeaders = ["010", "011", "016", "018", "019"];
</script>

<select>
  {#each phoneHeaders as header}
    <option>{header}</option>
  {/each}
</select>
