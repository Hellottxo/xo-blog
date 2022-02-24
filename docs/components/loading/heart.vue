<template>
  <div class="container">
    <div class="heart left" />
    <div class="heart right" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-top: 10px;
  animation: zoom 1s linear infinite;
}
@keyframes zoom {
  30% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  90% {
    transform: scale(.8);
  }
}
.heart {
  height: 40px;
  width: 25px;
  border-radius: 12px;
  background: #e91e63;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.left {
  transform: rotate(-45deg) translateX(10px);
}
.right {
  transform: rotate(45deg) translateX(-10px)
}
</style>

