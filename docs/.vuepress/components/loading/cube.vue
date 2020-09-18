<template>
  <div class="container">
    <div class="cube-box">
      <div
        class="cube"
        v-for="(item, index) in angle"
        :style="{'--rotate-angle': item}"
      >{{index + 1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angle: [
        "rotate(0)",
        "rotateY(180deg)",
        "rotateY(90deg)",
        "rotateY(-90deg)",
        "rotateX(90deg)",
        "rotateX(-90deg)"
      ]
    };
  }
};
</script>


<style scoped>
.container {
  perspective: 400px;
}
.cube-box {
  position: relative;
  height: 40px;
  width: 40px;
  transform-style: preserve-3d;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}
.cube {
  height: 100%;
  width: 100%;
  background: #ffc0cb45;
  border: 2px solid #fff;
  position: absolute;
  top: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transform: var(--rotate-angle) translateZ(20px);
  /* animation: zoom 2s linear infinite alternate; */
}
@keyframes zoom {
  25% {
    transform: var(--rotate-angle) translateZ(40px);
  }
  50% {
    transform: var(--rotate-angle) translateZ(20px);
  }
  75%{
    transform: var(--rotate-angle) translateZ(40px);
  }
  100% {
    transform: var(--rotate-angle) translateZ(20px);
  }
}
</style>
