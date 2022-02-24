<template>
  <div class="container">
    <div class="circle" />
  </div>
</template>

<style scoped>
.container {
  width: 50px;
  height: 50px;
  border: 3px solid pink;
  border-radius: 50%;
}
.circle {
  margin: 4px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #fff;
  animation: loading 1s cubic-bezier(0.13, 0.5, 0.74, 0.75) infinite;
  box-sizing: border-box;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
