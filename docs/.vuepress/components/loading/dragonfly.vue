<template>
  <div class="container">
    <div class="dragonfly">
      <div class="fly"/>
      <!-- <div class="dragon" /> -->
    </div>
    <div class="dragon"/>
    <div class="base" />
  </div>
</template>

<style scoped>
.container {
  --size: 50px;
  perspective: 100px;
  position: relative;
  width: var(--size);
  transform-style: preserve-3d;
}

.dragonfly {
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(0deg);
  animation: spin 0.5s linear infinite;
  right: -1px;
}
@keyframes spin {
  100% {
    transform: rotateX(-33.5deg) rotateY(360deg);
  }
}
.fly {
  width: var(--size);
  height: 4px;
  background: #fff;
  border-radius: 10px;
  transform: rotateX(90deg);
  border: 1px solid #000;
}
.dragon {
  margin: 0 auto;
  height: 30px;
  width: 2px;
  background: #fdea01;
  border: 1px solid #000;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.base {
  margin: -1px auto;
  background: #fdea01;
  height: 3px;
  width: 6px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border: 1px solid #000;
}
</style>
