<template>
  <div class="main-cube-c">
    <div class="scene">
      <div
        class="cube pn-animation"
        @click="cubeClick"
        :class="{ cubeClicked: clicked }"
        :id="id"
      >
        <div class="cube__face cube__face--front second face"></div>
        <!-- use this as the front  -->
        <div class="cube__face cube__face--front">?</div>
        <!-- use this for th back  -->
        <div class="cube__face cube__face--back">
          <slot> </slot>
        </div>
        <div class="cube__face cube__face--right face"></div>
        <div class="cube__face cube__face--left face"></div>
        <div class="cube__face cube__face--top face"></div>
        <div class="cube__face cube__face--bottom face"></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Detactor from "./Svgs/detactor.vue";

function CubeOnHover(id) {
  let item = document.querySelector("#cubeNumber1");
  item.addEventListener("mouseenter", () => {
    console.log("mouse entered");
    anime({
      targets: "#cubeNumber1",
      translateX: 50,
    });
  });
}

function cubeClick(id) {
  anime({
    targets: `#${id}`,
    // translateX: 200,
    rotateY: 200,
    duration: 400,
    delay: 500,
  });
}
export default {
  props: ["key", "id"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    cubeClick() {
      this.clicked = true;
      cubeClick(this.id);
    },
  },
  mounted() {
    // cubeClick(this.id);
    CubeOnHover();
  },
  components: { Detactor },
};
</script>

<style lang="scss" scoped>
$pn-cube-heightAndWidth: 5rem;
$pn-cube-translateZ: calc($pn-cube-heightAndWidth / 2);

.pn-animation:hover .cube__face--front {
  font-size: 5rem;
  user-select: none;
  color: red;
  // transition: all 0.5s;
  /* transform: rotateY(90deg); */
  /* transform: translateZ(-100px) rotateY(-180deg) rotateX(10deg); */
}

// This effect show a yellow effect on hoverning
.pn-animation:hover {
  transition: all 0.5s;
  transform: translateZ(-10px) rotateY(-20deg) rotateX(0deg);
  -webkit-box-shadow: 7px 0px 102px 40px rgba(247, 231, 49, 0.51);
  -moz-box-shadow: 7px 0px 102px 40px rgba(247, 231, 49, 0.51);
  box-shadow: 7px 0px 102px 40px rgba(247, 231, 49, 0.51);

  .cube__face--right,
  .cube__face--left,
  .cube__face--top,
  .cube__face--bottom {
    background: hsla(59, 100%, 51%, 0.768);
  }
}
// This effect show a orange effect if a cube selected
.cubeClicked {
  transition: all 0.5s;
  transform: translateZ(-10px) rotateY(-20deg) rotateX(0deg);
  -webkit-box-shadow: 7px 0px 102px 40px rgba(49, 65, 247, 0.51);
  -moz-box-shadow: 7px 0px 102px 40px rgba(49, 65, 247, 0.51);
  box-shadow: 7px 0px 102px 40px rgba(49, 65, 247, 0.51);

  .cube__face--right,
  .cube__face--left,
  .cube__face--top,
  .cube__face--bottom {
    background: hsla(231, 100%, 51%, 0.768);
  }
}

.main-cube-c {
  width: $pn-cube-heightAndWidth;
  height: $pn-cube-heightAndWidth;
  // background: grey;
  // transform: scale(0.5);
}

.scene {
  width: $pn-cube-heightAndWidth;
  height: $pn-cube-heightAndWidth;

  // margin: 100px;
  perspective: calc($pn-cube-heightAndWidth * 3);
}

.cube {
  width: $pn-cube-heightAndWidth;
  height: $pn-cube-heightAndWidth;
  position: relative;
  transform-style: preserve-3d;
  /* transform: translateZ(-100px); */
  transform: translateZ(-$pn-cube-translateZ);
  transition: transform 1s;
}

.cube__face {
  position: absolute;
  width: $pn-cube-heightAndWidth;
  height: $pn-cube-heightAndWidth;
  border: calc($pn-cube-heightAndWidth / 150) solid white;
  // line-height: 300px;
  display: flex;
  font-weight: bold;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.cube__face--front {
  background: hsla(0, 91%, 4%, 0.7);
}
.cube__face--front.second {
  background: hsla(0, 0%, 100%, 0.958);
}

.cube__face--back {
  background: hsla(55, 41%, 84%, 0.422);
  backface-visibility: hidden;
  color: black;
}

.cube__face--front {
  transform: rotateY(0deg) translateZ($pn-cube-translateZ);
}
.cube__face--front.second {
  transform: rotateY(180deg) translateZ($pn-cube-translateZ);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ($pn-cube-translateZ);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ($pn-cube-translateZ);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ($pn-cube-translateZ);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ($pn-cube-translateZ);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ($pn-cube-translateZ);
}

// dev stuff
.pn-animation {
  // transition: all 0.5s;
  // transform: rotateY(180deg);
  // transform: translateZ(-10px) rotateY(-20deg) rotateX(0deg);
  // background: green;
}
//--end here
</style>
