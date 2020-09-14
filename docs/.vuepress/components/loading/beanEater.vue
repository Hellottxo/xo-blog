<template>
  <div class="container">
    <div class="eater-container">
      <div class="eater top" />
      <div class="eater bottom" />
    </div>
    <div class="bean-container">
      <div v-for="item in 4" class="bean" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.eater-container {
  z-index: 2;
}

.eater {
  height: 20px;
  width: 40px;
  background: #ffc107;
}

.top {
  border-radius: 20px 20px 0 0;
  transform: rotate(-40deg);
  transform-origin: bottom center;
  animation: eater-top 0.6s linear 2ms infinite alternate;
}

.bottom {
  border-radius: 0 0 20px 20px;
  transform: rotate(40deg);
  transform-origin: top center;
  animation: eater-bottom 0.6s linear infinite alternate;
}

@keyframes eater-top {
  to {
    transform: rotate(-1deg);
  }
}

@keyframes eater-bottom {
  to {
    transform: rotate(1deg);
  }
}

.bean-container {
  display: flex;
  margin-left: -20px;
}

.bean {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #f44336;
  margin: 0 5px;
  animation: eat1 0.5s linear infinite;
}

.bean:last-child {
  animation: eat2 0.5s linear infinite;
}

@keyframes eat2 {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
    transform: translateX(-20px);
  }
}

@keyframes eat1 {
  to {
    transform: translateX(-20px);
  }
}
</style>
