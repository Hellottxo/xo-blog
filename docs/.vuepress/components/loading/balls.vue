<template>
  <div class="container">
    <div class="balls" v-for="item in 4" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 50px;
  padding: 10px;
  flex-wrap: wrap;
}
.balls {
  height: 17px;
  width: 17px;
  margin: 2px;
  border-radius: 50%;
  flex-shrink: 0;
}

.balls:nth-child(1) {
  background: #2196f3;
  animation: circle1 1s cubic-bezier(0.27, 0.44, 0.58, 1) 0.8s infinite alternate;
}

.balls:nth-child(2) {
  background: #8bc34a;
  animation: circle2 1s cubic-bezier(0.27, 0.44, 0.58, 1) 0.8s infinite alternate;
}

.balls:nth-child(3) {
  background: #ffc107;
  animation: circle3 1s cubic-bezier(0.27, 0.44, 0.58, 1) 0.8s infinite alternate;
}

.balls:nth-child(4) {
  background: #ff5722;
  animation: circle4 1s cubic-bezier(0.27, 0.44, 0.58, 1) 0.8s infinite alternate;
}

@keyframes circle1 {
  100% {
    transform: translate(22px, 22px);
  }
}

@keyframes circle2 {
  100% {
    transform: translate(-22px, 22px);
  }
}

@keyframes circle3 {
  100% {
    transform: translate(22px, -22px);
  }
}

@keyframes circle4 {
  100% {
    transform: translate(-22px, -22px);
  }
}
</style>
