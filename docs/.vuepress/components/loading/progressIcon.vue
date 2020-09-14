<template>
  <div class="progress-icon">
    <div class="progress-icon-bar">
      <div class="stripe-bar" v-for="item in 7" />
    </div>
    <div class="progress-icon-shadow" />
  </div>
</template>

<style scoped>
.progress-icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #d84719;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.progress-icon-bar {
  height: 10px;
  background: #ffc107;
  width: 34px;
  border-radius: 10px;
  flex-shrink: 0;
  z-index: 2;
  display: flex;
  overflow: hidden;
}

.stripe-bar {
  width: 5px;
  height: 15px;
  flex-shrink: 0;
  transform: skewX(-25deg);
  animation: stripe-move 0.5s linear infinite;
}

.stripe-bar:first-child {
  margin-left: -8px;
}

@keyframes stripe-move {
  100% {
    transform: translateX(10px) skewX(-25deg);
  }
}

.stripe-bar:nth-child(odd) {
  background: #fff;
  opacity: 0.7;
}

.progress-icon-shadow {
  width: 34px;
  position: absolute;
  height: 34px;
  background: #696666;
  top: 50%;
  left: 17px;
  opacity: 0.5;
  transform: skewX(30deg);
  transform-origin: center;
}
</style>
