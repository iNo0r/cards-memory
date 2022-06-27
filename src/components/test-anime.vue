<template>
  <div class="test-container">
    <div @click="showalert" id="my-circle">div</div>

    <button @click="animate">animate</button>
  </div>
</template>

<style>
.test-container {
  height: 50vh;
  width: 50vw;
  background-color: bisque;
}
#my-circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
}
</style>

<script>
import anime from "animejs";

function animate() {
  anime({
    targets: "#my-circle",
    duration: 2000,
    translateX: 250,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
  });
}
export default {
  methods: {
    animate,
    showalert() {
      alert("clicked");
    },
  },
  mounted() {},
};
console.log("done");
</script>