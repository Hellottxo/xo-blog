<template>
  <div class="fan">
    <div v-for="item in 17" class="fan-bar" :style="{'--fan-index': item}" />
    <div class="fan-circle" />
  </div>
</template>

<style scoped>
.fan {
  position: relative;
  display: flex;
  justify-content: center;
  height: 50px;
}

.fan-bar {
  --time: calc(var(--fan-index) * 5ms);
  height: 50px;
  width: 8px;
  background: pink;
  position: absolute;
  transform-origin: center 43px;
  animation: fan-rotate 1s ease-in-out var(--time) infinite alternate;
}

.fan-circle {
  height: 4px;
  width: 4px;
  background: #fff;
  top: 41px;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 0px #000000bf;
}

@keyframes fan-rotate {
  to {
    transform: rotate(calc((var(--fan-index) - 9) * 8deg));
    filter: brightness(calc(var(--fan-index) * 0.01 + 1));
    box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
