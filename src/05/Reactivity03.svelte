<script>
    let count = $state(1);

    let doubled = $derived(count * 2);
    let square = $derived(count * count);

    $effect(() => {
        console.log('두 배 값: ' + doubled);
        console.log('제곱 값: ' + square);
    });
    const handleClick = () => count++;
</script>

<button onclick={handleClick}>
    클릭 수 : {count}
</button>
<h3>두 배 구하기</h3>
<p>{count} x 2 = {doubled}</p>
<h3>제곱 구하기</h3>
<p>{count} x {count} = {square}</p>