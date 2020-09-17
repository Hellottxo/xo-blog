<template>
  <div class="container">
    <div class="dragonfly">
      <div class="fly"/>
      <!-- <div class="dragon" /> -->
    </div>
    <div class="dragon"/>
  </div>
</template>

<style scoped>
.container {
  perspective: 100px;
  position: relative;
  width: 50px;
}
.dragonfly {
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(0deg);
  animation: spin .5s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotateX(-33.5deg) rotateY(360deg);
  }
}
.fly {
  width: 50px;
  height: 10px;
  background: yellow;
  border-radius: 10px;
  transform: rotateX(90deg);
}
.dragon {
  margin: 0 auto;
  height: 45px;
  width: 10px;
  background: palegoldenrod;
  border-radius: 4px;
  box-shadow: inset -2px -1px 2px #00000078;
}
</style>
