<template>
  <div>
    <div class="main-title">Match The boxes</div>
  </div>
</template>
<script>
import anime from "animejs";
function animateText() {
  var textWrapper = document.querySelector(".main-title");
  console.log(textWrapper);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime.timeline({ easing: "easeOutExpo", duration: 750 }).add({
    targets: ".main-title .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  });
  // .add({
  //   targets: ".main-title",
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000,
  // });
}
export default {
  methods: {},
  mounted() {
    animateText();
  },
};
</script>
<style lang="scss">
.main-title {
  font-family: "Major Mono Display";
  font-size: 6rem;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
}
</style>
