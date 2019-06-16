<template>
  <div id="app">
    <router-view></router-view>
    <!-- <splash-screen v-if="!gameIsRunning" @startGame="gameIsRunning = !gameIsRunning"></splash-screen> -->
    <!-- <battle-field v-else>{{gameIsRunning}}</battle-field> -->
  </div>
</template>

<script>
// import SplashScreen from "@/components/SplashScreen/index.vue";
// import BattleField from "@/components/BattleField/index.vue";

export default {
  name: "App",
  data() {
    return {
      gameIsRunning: false
    };
  },
  created() { 
      // this.fetchPokemon(1)
  },
  methods: {
    fetchPokemon (id) {
      this.$store.dispatch('fetchPokemon', { id })
    }
  },
  components: {
    // SplashScreen,
    // BattleField
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  background-color: #27938E !important;
  border-radius: 30px !important;
  padding: .75rem 2rem !important;
  color: #fff !important;
  font-weight: 600 !important;
  letter-spacing: 2px !important;
  border: 5px solid #216573 !important;
  text-transform: uppercase !important;
  transition: all .4s ease !important;
}
.btn:hover {
  background-color: #216573 !important;
}
.btn--disabled {
  background-color: #e9e9e9 !important;
  border: 5px solid #d9d9d9 !important;
  color: #c9c9c9 !important;
  pointer-events: none;
}
.p-row {
  display: flex;
  width: 100%;
}
.wrap {
  flex-wrap: wrap;
}
.p-col {
  display: flex;
  flex-direction: column;
}
.p-col--6 {
  flex: 0 1 calc(100% / 12 * 6);
  max-width: calc(100% / 12 * 6);
}

.justfied-center {
  justify-content: center;
}

.aligned-center {
  align-items: center;
}

.order1 {
  order: 1;
}
.space_between {
  justify-content: space-between;
}
.end {
  justify-content: flex-end;
}
.half-height {
  height: 50%;
}
</style>
