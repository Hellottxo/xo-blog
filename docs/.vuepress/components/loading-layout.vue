<template>
  <div class="loading-container">
    <div v-for="item in loading" class="wrap">
      <component :is="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-layout',
  data() {
    return {
      loading: [
        'water',
        'beanEater',
        'clock',
        'book',
        'fan',
        'comments',
        'progressIcon',
        'blocks',
        'music',
        'progressBar',
        'balls',
        'loadingCircle'
      ]
    };
  },
  components: {
    balls: () => import('./loading/balls.vue'),
    beanEater: () => import('./loading/bean-eater.vue'),
    blocks: () => import('./loading/blocks.vue'),
    book: () => import('./loading/book.vue'),
    clock: () => import('./loading/clock.vue'),
    comments: () => import('./loading/comments.vue'),
    fan: () => import('./loading/fan.vue'),
    progressIcon: () => import('./loading/progress-icon.vue'),
    water: () => import('./loading/water.vue'),
    music: () => import('./loading/music.vue'),
    progressBar: () => import('./loading/progress-bar.vue'),
    loadingCircle: () => import('./loading/loading-circle.vue')
  }
};
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-wrap: wrap;
  margin: 25px;
}
.wrap {
  height: 230px;
  width: 230px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-collapse: collapse;
  background: #00bcd429;
  cursor: pointer;
  border: 3px solid #fff;
}
.wrap:hover {
  transform: scale(1.5);
  border: 3px solid #fff;
}
</style>
