<template>
  <div class="main-c">
    <section class="section1">
      <!-- <div class="main-title">Match The boxes</div> -->
      <PnTitle />
    </section>
    <section class="section2">
      <Cube v-for="n in 18" :key="n" :id="`cubeNumber${n}`" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
$pn-main-font: "Major Mono Display", monospace;

.main-c {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 20% 50%;
  justify-items: center;
  align-items: center;
}

// .section1 {
// }
.section2 {
  display: grid;
  // background: white;
  width: 60%;
  height: 80%;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>

<script>
import Cube from "./cube.vue";
import PnTitle from "./Game/title.vue";

export default {
  components: { Cube, PnTitle },
  mounted() {},
};
</script>
