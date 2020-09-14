<template>
  <div class="container">
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px;
}
.circle {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid #eee;
  border-top-color: pink;
  animation: loading 2s cubic-bezier(0.13, 0.5, 0.74, 0.75) 2ms infinite;
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
