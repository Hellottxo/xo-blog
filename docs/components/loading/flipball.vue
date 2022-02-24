<template>
  <div class="container">
    <div class="vertical">
      <div class="top"/>
      <div class="bottom"/>
    </div>
    <div class="tranverse">
      <div class="left"/>
      <div class="right"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 50px;
  width: 50px;
}
.vertical,
.tranverse {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  perspective: 300px;
  transform-style: preserve-3d;
  position: absolute;
  box-sizing: border-box;
}
.vertical {
  background: palegoldenrod;
  animation: vertical-display 1s steps(2) infinite;
}
@keyframes vertical-display {
  0% {
    z-index: -2;
  }  
  50% {
    z-index: 2;
  }
  100% {
    z-index: -2;
  }
}
.tranverse {
  background: palevioletred;
  z-index: -2;
  animation: tranverse-display 1s steps(2) infinite;
}
@keyframes tranverse-display {
  0% {
    z-index: 2;
  }
  50% {
    z-index: -2;
  }
}
.top,
.bottom {
  height: 50%;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: palevioletred;
  transform-origin: center bottom;
  position: absolute;
}
.top {
  animation: vertical-flip .5s linear infinite;
}
.bottom {
  transform: rotate(180deg);
}
@keyframes vertical-flip {
  100% {
    background: palegoldenrod;
    transform: rotateX(-180deg);
  }
}

.left,
.right {
  height: 100%;
  width: 50%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background: palegoldenrod;
  transform-origin: center right;
  position: absolute;
}
.left {
  animation: transverse-flip .5s linear infinite;
}
.right {
  transform: rotate(180deg);
}
@keyframes transverse-flip {
  100% {
    background: palevioletred;
    transform: rotateY(180deg);
  }
}
</style>
