<template>
  <div class="music">
    <div v-for="item in 3" class="music-bar" :style="{ '--music-index': item }" :key="item" />
    <div class="music-bar" style="--music-index: 2" />
    <div class="music-bar" style="--music-index: 1" />
  </div>
</template>

<style scoped>
.music {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 300px;
  align-items: center;
}

.music-bar {
  width: 6px;
  background: #ffc107;
  height: 6px;
  border-radius: 3px;
  margin: 0 3px;
  --time: calc(var(--music-index) * 0.5s);
  animation: music-animation 0.7s ease-in-out var(--time) infinite alternate;
}

@keyframes music-animation {
  to {
    height: calc(20px + var(--music-index) * 5px);
  }
}
</style>
