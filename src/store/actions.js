import { fetchPokemon } from "@/api/index";

export default {
  fetchPokemon: ({ commit }, { id }) => {
    console.log(id, 'action')
    
    return fetchPokemon(id)
      .then(pokemon => commit('SET_POKEMON', { 
        pokemon 
      }))
  },
}
