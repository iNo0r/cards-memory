<template>
  <div class="main-cube-c">
    <div class="scene">
      <div class="cube pn-animation">
        <div class="cube__face cube__face--front second face"></div>
        <!-- use this as the front  -->
        <div class="cube__face cube__face--front">?</div>
        <!-- use this for th back  -->
        <div class="cube__face cube__face--back">Back</div>
        <div class="cube__face cube__face--right face"></div>
        <div class="cube__face cube__face--left face"></div>
        <div class="cube__face cube__face--top face"></div>
        <div class="cube__face cube__face--bottom face"></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
$pn-cube-heightAndWidth: 400px;
$pn-cube-translateZ: calc($pn-cube-heightAndWidth / 2);

.pn-animation:hover .cube__face--front {
  font-size: 5rem;
  user-select: none;
  color: red;
  transition: all 0.5s;
  /* transform: rotateY(90deg); */
  /* transform: translateZ(-100px) rotateY(-180deg) rotateX(10deg); */
}
.pn-animation:hover {
  transition: all 0.5s;
  /* transform: rotateY(90deg); */
  transform: translateZ(-100px) rotateY(-10deg) rotateX(0deg);
}
.pn-animation:active {
  transition: all 0.5s;
  /* transform: rotateY(90deg); */
  /* color: blue; */
  transform: translateZ(-100px) rotateY(-160deg) rotateX(0deg);
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

  margin: 100px;
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

/* .cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}
.cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}
.cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}
.cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}
.cube.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}
.cube.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
} */

.cube__face {
  position: absolute;
  width: $pn-cube-heightAndWidth;
  height: $pn-cube-heightAndWidth;
  border: calc($pn-cube-heightAndWidth / 150) solid white;
  // line-height: 300px;
  display: flex;
  font-weight: bold;
  font-size: 40px;
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
  background: hsla(0, 0%, 100%, 0.7);
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
</style>