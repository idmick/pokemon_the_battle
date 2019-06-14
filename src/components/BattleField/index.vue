<template>
  <div class="battlefield-wrapper">
    <div class="battlefield">
      <div class="p-row half-height">
        <div class="p-col p-col--6">
          <status-bar name="Gengar" level="85" :health="22" gender="male"></status-bar>
        </div>
        <div class="p-col p-col--6 end">
          <pokemon
            sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
          ></pokemon>
        </div>
      </div>
      <div class="p-row half-height">
        <div class="p-col p-col--6 order1 end">
          <status-bar name="Pikachu" level="79" :health="60" gender="female"></status-bar>
        </div>
        <div class="p-col p-col--6 end">
          <pokemon
            sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png"
          ></pokemon>
          {{pokemon}}
        </div>
      </div>
    </div>
    <toolbar></toolbar>
  </div>
</template>

<script>
import StatusBar from "@/components/StatusBar/index";
import Pokemon from "@/components/Pokemon/index";
import Toolbar from "@/components/Toolbar/index";
import { fetchPokemon } from "@/api/index";

export default {
  name: "BattleField",
  data() {
    return {
      pokemon: ""
    };
  },
  components: {
    StatusBar,
    Pokemon,
    Toolbar
  },
  created() {
    this.getPokemon("pikachu");
  },
  methods: {
    getPokemon(id) {
      this.pokemon = fetchPokemon(id);
    }
  }
};
</script>

<style scoped lang="scss">
.battlefield-wrapper {
  height: 100vh;
  border: 20px solid black;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    #f1f1f3,
    #f1f1f3 50%,
    #f6f6f5 50%,
    #f6f6f5
  );
  background-size: 100% 10px;
  .battlefield {
    height: calc(100vh - 240px);
    padding: 2rem 2rem 0 2rem;
  }
}
</style>
