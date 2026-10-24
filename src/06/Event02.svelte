<script>
    let m = $state({x: 0, y: 0});
</script>

<div onmousemove={e => m = {x: e.clientX, y: e.clientY}} role="presentation">
x 좌표 : {m.x} <br/>
y 좌표 : {m.y}
</div>

<style>
    div{width: 100vw; height: 100vh;}
</style>