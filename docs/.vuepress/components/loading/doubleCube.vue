<template>
  <div class="container">
    <div class="cube-box">
      <div class="cube" v-for="item in angle" :style="{'--rotate-angle': item}"/>
    </div>
    <div class="cube-box cube-box-inner">
      <div class="cube-inner" v-for="item in angle" :style="{'--rotate-angle': item}"/>
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
  transform: rotateX(-33.5deg) rotateY(45deg);
  animation: spin 2s linear infinite;
  z-index: 2;
}
.cube-box-inner {
  transform: scale3d(0.5, 0.5, 0.5) rotateX(-33.5deg) rotateY(45deg);
  position: absolute;
  bottom: 0;
  left: 0;
  animation: inner-spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  25% {
    transform: rotateX(-33.5deg) rotateY(-45deg);
  }
  100% {
    transform: rotateX(-33.5deg) rotateY(-45deg);
  }
}

@keyframes inner-spin {
  0% {
    transform: scale3d(0.5, 0.5, 0.5) rotateX(-33.5deg) rotateY(45deg);
  }
  25% {
    transform: scale3d(0.5, 0.5, 0.5) rotateX(-33.5deg) rotateY(135deg);
  }
  100% {
    transform: scale3d(0.5, 0.5, 0.5) rotateX(-33.5deg) rotateY(135deg);
  }
}
.cube, .cube-inner {
  height: 100%;
  width: 100%;
  background: #ffc0cb45;
  border: 1px solid #fff;
  position: absolute;
  top: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transform: var(--rotate-angle) translateZ(20px);
}

.cube-inner {
  background: pink;
  border: 2px solid #fff;
}
</style>
