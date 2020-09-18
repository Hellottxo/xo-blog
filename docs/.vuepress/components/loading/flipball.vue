<template>
  <div class="container">
    <div class="left"/>
    <div class="right"/>
    <div class="top"/>
    <div class="bottom"/>
  </div>
</template>

<style scoped>
.container {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  perspective: 300px;
  background: pink;
  animation: color-chg 2s linear infinite;
  transform-style: preserve-3d;
}
@keyframes color-chg {
  0% {
    background: palegoldenrod;
  }
  50% {
    background: palegoldenrod;
  }
  100% {
    background: palegoldenrod;
  }
}
.top,
.bottom {
  position: absolute;
  width: 50px;
  height: 25px;
  background: palegoldenrod;
}
.top {
  transform-origin: center bottom;
  animation: spin 2s linear infinite;
  border-radius: 25px 25px 0 0;
}
.bottom {
  bottom: 0;
  border-radius: 0 0 25px 25px;
}
@keyframes spin {
  0% {
    transform: rotateX(0deg);
    background: palegoldenrod;
  }
  50% {
    transform: rotateX(-180deg);
    background: paleturquoise;
  }
  100% {
    transform: rotateX(-180deg);
    background: paleturquoise;
  }
}
.left,
.right {
  position: absolute;
  width: 25px;
  height: 50px;
  background: paleturquoise;
}
.left {
  border-radius: 25px 0 0 25px;
}
.right {
  right: 0;
  border-radius: 0 25px 25px 0;
  transform-origin: left center;
  animation: side-spin 2s linear infinite;
}
@keyframes side-spin {
  0% {
    transform: rotateY(0);
    background: paleturquoise;
  }
  50% {
    transform: rotateY(0deg);
    background: paleturquoise;
  }
  100% {
    transform: rotateY(-180deg);
    background: palegoldenrod;
  }
}
</style>
