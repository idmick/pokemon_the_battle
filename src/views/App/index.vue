<template>
  <div id="app">
    <splash-screen v-if="!gameIsRunning" @startGame="gameIsRunning = !gameIsRunning"></splash-screen>
    <battle-field v-else>{{gameIsRunning}}</battle-field>
  </div>
</template>

<script>
import SplashScreen from "@/components/SplashScreen/index.vue";
import BattleField from "@/components/BattleField/index.vue";

export default {
  name: "App",
  data() {
    return {
      gameIsRunning: false
    };
  },
  components: {
    SplashScreen,
    BattleField
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
  background-color: #27938E;
  border: none;
  border-radius: 30px;
  padding: .75rem 2rem;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  border: 5px solid #216573;
  cursor: pointer;
  transition: background-color .4s ease;
}
.btn:hover {
  background-color: #216573;
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
