<template>
  <div class="splash_screen">
    <img class="title-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/724333/Pokemon.png">
    <h1>THE BATTLE</h1>
    <p class="instruction_text">Select your Pokemon:</p>
    <fish-select search v-model="selectedPokemon" class="select">
      <fish-option
        v-for="pokemon in pokemonNames"
        :key="pokemon"
        :index="pokemon" :content="pokemon"
      ></fish-option>
    </fish-select>
    <fish-button :dsiabled="!selectedPokemon" class="btn" :class="{'btn--disabled': !selectedPokemon}" @click="startGame">start game</fish-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "SplashScreen",
  data () {
    return {
      selectedPokemon: ''
    }
  },
  computed: {
     ...mapState([
      'pokemonNames'
    ])
  },
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
.instruction_text {
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 1px 1px rgba(0,0,0,0.75)
}
.select {
  border: 5px solid #216573 !important;
  border-radius: 30px !important;
  margin-bottom: 2rem;
  max-width: 40%;
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
