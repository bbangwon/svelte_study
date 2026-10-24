<script>
    const handleClick = text => alert(`${text} 클릭`);
</script>

<button onclick={() => handleClick('1번')}>첫번째 버튼</button>
<button onclick={() => handleClick('2번')}>두번째 버튼</button>