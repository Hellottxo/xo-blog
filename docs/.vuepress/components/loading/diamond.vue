<template>
  <div class="container">
    <div class="diamond-box">
      <div
        class="diamond"
        v-for="(item, index) in angle"
        :style="{'--rotate-angle': item}"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angle: [
        "rotate(0)",
        "rotateY(90deg)",
        "rotateY(180deg)",
        "rotateY(-90deg)",
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
.diamond-box {
  width: 24px;
  height: 24px;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}
.diamond {
  height: 100%;
  width: 100%;
  position: absolute;
  border: 12px solid #FFCA28;
  border-bottom-width: 24px;
  border-color: transparent transparent #FFCA28 transparent;
  bottom: 0;
  box-sizing: border-box;
  transform: var(--rotate-angle) translateZ(12px) rotateX(30deg);
  transform-origin: bottom center;
  box-shadow: 0px 0px 0px 2px #F48FB1;
}
.diamond:nth-child(odd) {
  transform-origin: bottom center;
}
.diamond:last-child {
  border-color: #FFCA28;
  border-width: 12px;
  transform: var(--rotate-angle) translateZ(12px);
  transform-origin: center;
}
</style>
