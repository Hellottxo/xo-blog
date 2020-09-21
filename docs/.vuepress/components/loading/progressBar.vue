<template>
  <div class="progress">
    <div class="progress-square" />
  </div>
</template>

<style scoped>
.progress {
  width: 50px;
  height: 10px;
  border-radius: 15px;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0px 0px 0 2px #d84719;
}

.progress-square {
  width: 30px;
  height: 100%;
  transform: translateX(-30px);
  background: #cddc39;
  animation: progress-move 1s ease-in-out infinite;
}

@keyframes progress-move {
  100% {
    transform: translateX(60px);
  }
}
</style>

