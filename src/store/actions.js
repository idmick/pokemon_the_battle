import { fetchPokemon } from "@/api/index";

export default {
  fetchPokemon: ({ commit }, { id }) => {
    return fetchPokemon(id)
      .then(pokemon => commit('SET_POKEMON', { 
        pokemon 
      }))
  },
}
