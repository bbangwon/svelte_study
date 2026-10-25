<script>
    const handleClick01 = () => alert('클릭은 한 번만 제공합니다.');
    const handleClick02 = () => alert('클릭이 계속 실행됩니다.');

    function once(fn) {
        return function(event) {
            if (fn) fn.call(this, event);
            fn = null;
        }
    }
</script>

<button onclick={once(handleClick01)}>클릭01</button>
<button onclick={handleClick02}>클릭02</button>