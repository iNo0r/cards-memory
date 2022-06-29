<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import GameVue from "./components/Game.vue";

import Cube from "./components/cube.vue";
import TestAnime from "./components/test-anime.vue";
</script>

<template>
  <div>
    <GameVue />
    <!-- <Cube /> -->
    <!-- <TestAnime /> -->
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Poppins:wght@100;200;300&family=Qahiri&family=Quantico:wght@400;700&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  background-color: black;
  color: white;
}
</style>
