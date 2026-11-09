<script>
  import { Spring } from "svelte/motion";

  const spring = new Spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25,
    },
  );
</script>

<svg
  onmousemove={(e) => {
    spring.set({ x: e.clientX, y: e.clientY });
  }}
>
  <circle cx={spring.current.x} cy={spring.current.y} r="10" />
</svg>

<style>
  svg {
    width: 100vw;
    height: 100vh;
    margin: -8px;
  }
  circle {
    fill: #ff3e00;
  }
</style>
