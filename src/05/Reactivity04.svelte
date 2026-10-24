<script>
    let count = $state(1);

    $effect(() =>{ 
        if(count >= 10){
            alert('10개 이상 구매할 수 없습니다.');
            count = 9;
        }
        if(count <= 0) {
            alert('최소 구매 개수는 1개입니다.');
            count = 1;
        }
    })

    const plusHandler = () => count++;
    const minusHandler = () => count--;
</script>

<button onclick={minusHandler}>-</button>
<input type="text" value={count} style="width: 25px;"/>
<button onclick={plusHandler}>+</button>