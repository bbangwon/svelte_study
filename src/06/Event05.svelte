<script>
    const handleClick = () => {
        let move = confirm('제이펍 사이트로 이동하시겠습니까?');
        move && location.assign('http://jpub.kr');
    }

    function preventDefault(fn) {
        return function(event) {
            event.preventDefault();
            fn.call(this, event);
        }
    }
</script>

<h1>
    <a href="http://jpub.kr" onclick={preventDefault(handleClick)}>제이펍 출판사</a>
</h1>