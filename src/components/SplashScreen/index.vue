<template>
  <div class="splash_screen">
    <img class="title-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/Pokemon.png">
    <h1>THE BATTLE</h1>
    <button class="btn btn-primary btn-lg" @click="startGame()">NEW GAME</button>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  created: function() {
    window.addEventListener("keydown", this.keydown);
  },
  destroyed: function() {
    window.removeEventListener("keydown", this.keydown);
  },
  methods: {
    keydown(e) {
      if (e.code === "Space" || e.code === "Enter") {
        this.startGame();
      }
    },
    startGame() {
      this.$emit("startGame");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splash_screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    #eff6ff,
    #b9d4ff,
    #8aafff,
    #6689f9,
    #515fed
  );
}
.title-img {
  width: 50%;
  display: block;
}
h1 {
  font-weight: 900;
  font-size: 3rem;
  -webkit-text-stroke: 2px rgb(138, 103, 75);
  background: linear-gradient(
    to top,
    #bf953f,
    #c7a245,
    #cfaf4b,
    #d7bc52,
    #deca59,
    #e1d264,
    #e4da6f,
    #e7e27a,
    #e8e68a,
    #e9ea9a,
    #ebeea9,
    #edf2b8
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
