<template>
  <div class="liquid">
    <div class="wave" v-for="item in 3" :style="{ '--wave-index': item }" :key="item" />
  </div>
</template>

<style scoped>
.liquid {
  height: 50px;
  width: 50px;
  border: 5px solid #ff5722;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.wave {
  height: 100px;
  width: 100px;
  background: #03a9f4;
  border-radius: 30px;
  position: absolute;
  top: 25px;
  right: -30px;
  --rotate: calc(var(--wave-index) * 60deg);
  transform: rotate(var(--rotate));
  opacity: calc((4 - var(--wave-index)) / 3);
  animation: water-wave 4s linear infinite;
}

@keyframes water-wave {
  100% {
    transform: rotate(calc(var(--rotate) + 360deg));
  }
}
</style>
