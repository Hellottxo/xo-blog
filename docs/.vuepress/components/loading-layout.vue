<template>
  <div class="loading-container">
    <div v-for="item in loading" class="wrap"  @click="gotoTarget(item)">
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
    beanEater: () => import('./loading/beanEater.vue'),
    blocks: () => import('./loading/blocks.vue'),
    book: () => import('./loading/book.vue'),
    clock: () => import('./loading/clock.vue'),
    comments: () => import('./loading/comments.vue'),
    fan: () => import('./loading/fan.vue'),
    progressIcon: () => import('./loading/progressIcon.vue'),
    water: () => import('./loading/water.vue'),
    music: () => import('./loading/music.vue'),
    progressBar: () => import('./loading/progressBar.vue'),
    loadingCircle: () => import('./loading/loadingCircle.vue'),
  },
  methods: {
    gotoTarget: (key) => {
      console.log(key);
      window.open(
        `https://github.com/Hellottxo/xo-blog/blob/master/docs/.vuepress/components/loading/${key}.vue`,
        "_blank"
      );
    }
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
  height: 172px;
  width: 172px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-collapse: collapse;
  background: #3f51b5;
  cursor: pointer;
  border: 3px solid #fff;
}
.wrap:hover {
  transform: scale(1.5);
  border: 3px solid #fff;
  background: #3f51b5d9;
  z-index: 222;
}
</style>
