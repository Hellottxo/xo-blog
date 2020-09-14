<template>
  <div class="clock">
    <div class="clock-inner"></div>
  </div>
</template>

<style scoped>
.clock {
  height: 50px;
  width: 50px;
  border: 4px solid #ff5722;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
}

.clock-inner {
  height: 3px;
  width: 3px;
  border: 2px solid black;
  border-radius: 50%;
  background: #fff;
  z-index: 2;
}

.clock::before {
  height: 2px;
  width: 10px;
  background: #000;
  content: "";
  position: absolute;
  left: 11px;
  animation: move 1s linear infinite;
  transform-origin: right center;
}

.clock::after {
  height: 2px;
  width: 18px;
  background: #000;
  content: "";
  position: absolute;
  right: 3px;
  animation: move 3s linear infinite;
  transform-origin: left center;
}

@keyframes move {
  100% {
    transform: rotate(360deg);
  }
}
</style>
