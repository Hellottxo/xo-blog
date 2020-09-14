<template>
  <div class="blocks">
    <div v-for="item in [1, 2, 3, 8]" class="blocks-square" :style="{'--square-index': item}"/>
    <div class="blocks-square"></div>
    <div v-for="item in [4, 7, 6, 5]" class="blocks-square" :style="{'--square-index': item}"/>
  </div>
</template>

<style scoped>
.blocks {
  height: 45px;
  width: 45px;
  display: flex;
  flex-wrap: wrap;
}

.blocks-square {
  margin: 1px;
  background: #607d8b;
  height: 13px;
  width: 13px;
  box-sizing: border-box;
}

.blocks-square:nth-child(5) {
  background: transparent;
}

.blocks-square:not(:nth-child(5)) {
  --time: calc((var(--square-index) - 1) * 0.2s);
  animation: blocks-animation 1.6s linear var(--time) infinite;
}

@keyframes blocks-animation {
  0% {
    background: #607d8b;
  }

  12.5% {
    background: #03a9f4;
  }

  13% {
    background: #607d8b;
  }
}
</style>
