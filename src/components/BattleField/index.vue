<template>
  <div class="battlefield-wrapper">
    <div class="battlefield">
      <div class="p-row half-height">
        <div class="p-col p-col--6">
          <status-bar :name="cpuPokemon.name" :level="cpuPokemon.level" :health="60" gender="female"></status-bar>
        </div>
        <div class="p-col p-col--6 end">
          <pokemon
            :sprite="cpuPokemon.sprites.front_default"
          ></pokemon>
        </div>
      </div>
      <div class="p-row half-height">
        <div class="p-col p-col--6 order1 end">
          <status-bar :name="userPokemon.name" :level="userPokemon.level" :health="60" gender="female"></status-bar>
        </div>
        <div class="p-col p-col--6 end">
          <pokemon
            :sprite="userPokemon.sprites.back_default"
          ></pokemon>
          <!-- <div v-for="move in movesAtLevel(userPokemon)" :key="move.move.name">{{ move.move.name }}</div> -->
        </div>
      </div>
    </div>
    <toolbar :moves="movesAtLevel(userPokemon)"></toolbar>
  </div>
</template>

<script>
import StatusBar from "@/components/StatusBar/index";
import Pokemon from "@/components/Pokemon/index";
import Toolbar from "@/components/Toolbar/index";
import { fetchPokemon } from "@/api/index";

export default {
  name: 'BattleField',
  data() {
    return {
      userPokemon: '',
      cpuPokemon: ''
    };
  },
  components: {
    StatusBar,
    Pokemon,
    Toolbar
  },
  created() {
    this.getUserPokemon('pikachu', 30);
    this.getCpuPokemon('eevee', 28);
  },
  methods: {
    getUserPokemon(id, level) {
      fetchPokemon(id)
        .then((response) => {
          this.userPokemon = response
          this.$set(this.userPokemon, 'level', level)
        })
    },
    getCpuPokemon(id, level) {
      fetchPokemon(id)
        .then((response) => {
          this.cpuPokemon = response
          this.$set(this.cpuPokemon, 'level', level)
        })
    },
    movesAtLevel(pokemon)  {
      if (this.userPokemon) {
        return pokemon.moves.filter((move) => {
          return move.version_group_details.some((detail) => {
            return detail.level_learned_at > 0 && detail.level_learned_at <= pokemon.level && detail.version_group.name === 'firered-leafgreen'
          })
        })
      }
    }
  }
};
</script>

<style scoped lang="scss">
.battlefield-wrapper {
  height: calc(100vh - 40px);
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
    height: calc(100vh - 272px);
    padding: 2rem 2rem 0 2rem;
  }
}
</style>
