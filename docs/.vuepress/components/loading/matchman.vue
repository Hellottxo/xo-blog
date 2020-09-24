<template>
  <div class="matchman">
    <div class="back"/>
    <div class="head"/>
    <div class="up-body">
      <div class="hand"/>
      <div class="body"/>
      <div class="hand"/>
    </div>
    <div class="down-body">
      <div class="leg" v-for="item in 2"/>
    </div>
  </div>
</template>

<style scoped>
.matchman {
  height: 50px;
  width: 50px;
  box-shadow: -14px 1px 0 0px black;
  margin-left: 28px;
}
.head {
  height: 13px;
  width: 13px;
  border-radius: 50%;
  border: 1px solid #000;
  margin: auto;
}
.up-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.body,
.hand {
  height: 18px;
  width: 2px;
  background: #000;
}
.hand,
.leg {
  width: 1px;
  transform-origin: top;
}
.hand:first-child {
  transform: rotate(30deg);
  animation: left-swing 0.5s ease-in-out infinite alternate;
}
.hand:last-child {
  transform: rotate(-30deg);
  animation: right-swing 0.5s ease-in-out infinite alternate;
}
@keyframes left-swing {
  100% {
    transform: rotate(20deg);
  }
}
@keyframes right-swing {
  100% {
    transform: rotate(-20deg);
  }
}
.down-body {
  display: flex;
  justify-content: center;
}
.leg {
  height: 18px;
  background: #000;
}
.leg:first-child {
  transform: rotate(30deg);
  animation: left-walk 0.5s ease-in-out infinite alternate;
}
.leg:last-child {
  transform: rotate(-30deg);
  animation: right-walk 0.5s ease-in-out infinite alternate;
}
@keyframes left-walk {
  100% {
    transform: rotate(-30deg);
  }
}
@keyframes right-walk {
  100% {
    transform: rotate(30deg);
  }
}
</style>
