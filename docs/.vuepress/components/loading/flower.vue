<template>
  <div class="container">
    <div class="slice" v-for="(item, index) in 5" :style="{'--slice-index': index}"/>
  </div>
</template>

<style scoped>
.container {
  perspective: 300px;
  transform-style: preserve-3d;
  width: 50px;
  height: 50px;
  transform: rotateY(25deg) rotateX(-10deg);
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotateY(25deg) rotateX(-10deg) rotate(360deg);
  }
}
.slice {
  --angle: calc(var(--slice-index) * 45deg);
  width: 100%;
  height: 100%;
  border: 1px solid pink;
  background: #ffc0cb8c;
  border-radius: 50%;
  transform: rotateY(90deg) rotateX(var(--angle));
  position: absolute;
}
</style>
