<template>
  <div class="comments">
    <div v-for="item in 3" class="dots" :style="{ '--dots-index': item }" :key="item" />
  </div>
</template>

<style scoped>
.comments {
  background: #4caf50;
  height: 50px;
  width: 50px;
  border-radius: 35px 35px 35px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dots {
  height: 8px;
  width: 8px;
  background: #fff;
  border-radius: 50%;
  margin: 3px;
  opacity: 0;
  --time: calc(var(--dots-index) * 0.1s);
  animation: dots-move 0.9s ease-out var(--time) infinite;
}

@keyframes dots-move {
  100% {
    opacity: 1;
  }
}
</style>
