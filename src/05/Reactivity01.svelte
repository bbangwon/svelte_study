<script>
    let count = $state(1);
    const handleClick = () => count++;
</script>

<button onclick={handleClick}>
    클릭 수 : {count} {count === 1 ? 'time' : 'times'}
</button>