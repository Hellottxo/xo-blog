<template>
  <div class="container">
    <div class="circle" />
  </div>
</template>

<style scoped>
.container {
  padding: 10px;
}
.circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid #fff;
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
