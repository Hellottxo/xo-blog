<template>
  <div class="loading-container">
    <div v-for="item in loading" class="wrap" @click="gotoTarget(item)">
      <component :is="item"/>
    </div>
  </div>
</template>

<script>
const loading = [
  'water',
  'beanEater',
  'clock',
  'cube',
  'dragonfly',
  'music',
  'doubleCube',
  'book',
  'fan',
  'comments',
  'heart',
  'progressIcon',
  'blocks',
  'progressBar',
  'balls',
  'loadingCircle'
];

export default {
  name: 'loading-layout',
  data() {
    return {
      loading: loading
    };
  },
  components: (() => {
    const map = {};
    loading.forEach((e) => map[e] = () => import(`./loading/${e}.vue`));
    return map;
  })(),
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
