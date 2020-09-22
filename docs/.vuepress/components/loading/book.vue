<template>
  <div class="books">
    <div class="left">
      <div class="pages" />
    </div>
    <div class="right">
      <div class="pages" v-for="item in 3" :style="{'--pages-index': item}" />
      <div class="pages" />
    </div>
  </div>
</template>

<style scoped>
.books {
  display: flex;
  width: 50px;
  transform-style: preserve-3d;
}

.pages {
  height: 35px;
  width: 25px;
  border: 2px solid #d84719;
  background: #f7eddc;
  box-shadow: inset 0 0 1px #4a4949;
  box-sizing: border-box;
}

.left .pages {
  border-right: none;
}

.right .pages {
  border-left: none;
  position: absolute;
  transform-origin: left;
  z-index: calc(4 - var(--pages-index));
  --angle: calc(-150deg - var(--pages-index) * 30deg);
  --time: calc((var(--pages-index) - 1) * .3s);
  animation: page-chg 1s linear var(--time) infinite;
}

@keyframes page-chg {

  100% {
    transform: perspective(120px) rotateY(var(--angle));
  }
}
</style>
