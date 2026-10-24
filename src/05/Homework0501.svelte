<script>
    let num = $state(2);
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    $effect(() => {
        if (num < 2) {
            alert('구구단은 2단 보다 작을 수 없습니다.');
            num = 2;
        }
        if (num > 9) {
            alert(' 구구단은 9단을 초과할 수 없습니다.');
            num = 9;
        }
    })

    const increase = () => num++;
    const decrease = () => num--;
</script>

<h1>구구단 출력</h1>
<h3>
    {num}단
    <button onclick={decrease}>
        -
    </button>
    <button onclick={increase}>
        +
    </button>
</h3>

{#each numbers as number}
    <div>{num} x {number} = {num * number}</div>
{/each}
