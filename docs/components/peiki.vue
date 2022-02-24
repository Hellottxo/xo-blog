<template>
  <div
    class="back"
    @mousemove="moveIn"
    @mouseleave="moveOut"
    :style="{ transform: back }"
    ref="back"
  >
    <div class="x" :style="{ transform: x }">
      <img src="../../assets/peiki/2.jpg" alt>
    </div>
    <div class="y" :style="{ transform: y }">
      <img src="../../assets/peiki/1.jpg" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "peiki",
  data() {
    return {
      back: "",
      x: "",
      y: ""
    };
  },
  methods: {
    moveIn(event) {
      const mousex =
        event.clientX -
        this.$refs.back.offsetLeft -
        this.$refs.back.offsetWidth / 2;
      const mousey =
        event.clientY -
        this.$refs.back.offsetTop -
        this.$refs.back.offsetHeight / 2;

      const changex = mousey / 500;
      const changey = mousex / 500;

      this.back = `perspective(400px) rotatex(${changex}deg) rotateY(${changey}deg)`;
      this.x = `matrix(1,0,0,1, ${mousex / -30} , ${mousey / -30} )`;
      this.y = `matrix(1,0,0,1, ${mousex / 20} , ${mousey / 20} )`;
    },
    moveOut() {
      this.back = "perspective(400px) rotatex(0deg) rotateY(0deg)";
      this.x = "matrix(1,0,0,1,0,0)";
      this.y = "matrix(1,0,0,1,0,0)";
    }
  }
};
</script>

<style scoped>
.back {
  position: relative;
  width: 1080px;
  height: 600px;
  background: url(../../assets/peiki/back.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}

img {
  height: 300px;
}

.x {
  position: absolute;
  left: 300px;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
  bottom: 0;
}

.y {
  position: absolute;
  right: 300px;
  bottom: 0;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
}
</style>
